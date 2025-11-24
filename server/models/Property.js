const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  // ==================== 1. BASIC PROPERTY INFORMATION ====================
  title: { type: String, required: true },
  description: { type: String },
  propertyType: {
    type: String,
    enum: [
      'apartment_condo',
      'house_villa_detached',
      'townhouse',
      'commercial_retail',
      'office',
      'industrial_warehouse',
      'land_plot',
      'farm'
    ],
    required: true
  },
  listingStatus: {
    type: String,
    enum: ['for_sale', 'for_rent', 'new_project_offplan'],
    required: true
  },
  occupancy: {
    type: String,
    enum: ['owner_occupied', 'vacant', 'tenanted']
  },
  furnishing: {
    type: String,
    enum: ['furnished', 'semi_furnished', 'unfurnished']
  },
  purpose: {
    type: String,
    enum: ['residential', 'commercial']
  },

  // ==================== 2. LOCATION DETAILS ====================
  location: {
    fullAddress: { type: String },
    city: { type: String, required: true },
    district: { type: String },
    street: { type: String },
    buildingName: { type: String },
    floorNumber: { type: Number },
    unitNumber: { type: String },
    coordinates: {
      latitude: { type: Number },
      longitude: { type: Number }
    },
    nearbyLandmarks: [{ type: String }]
  },

  // ==================== 3. PRICING DETAILS ====================
  // For Sale
  pricing: {
    price: { type: Number },
    pricePerSqm: { type: Number }, // calculated
    negotiable: { type: Boolean, default: false },
    currency: { type: String, default: 'AZN' },

    // For Rent
    monthlyRent: { type: Number },
    annualRent: { type: Number }, // calculated or input
    depositAmount: { type: Number },
    paymentFrequency: {
      type: String,
      enum: ['monthly', 'quarterly', 'semi_annual', 'annual']
    },
    utilitiesIncluded: { type: Boolean, default: false },
    minimumContractPeriod: { type: Number } // in months
  },

  // ==================== 4. PROPERTY SIZE & SPECIFICATIONS ====================
  specifications: {
    builtUpArea: { type: Number }, // in sqm
    landArea: { type: Number }, // for houses, villas, land
    floorArea: { type: Number },
    plotWidth: { type: Number }, // for land listings
    plotLength: { type: Number }, // for land listings
    yearBuilt: { type: Number },
    renovationYear: { type: Number },
    constructionStatus: {
      type: String,
      enum: ['ready', 'under_construction', 'off_plan']
    },
    totalFloorsInBuilding: { type: Number },
    floorNumberOfUnit: { type: Number }
  },

  // ==================== 5. ROOM DETAILS ====================
  rooms: {
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    balconies: { type: Number },
    maidsRoom: { type: Boolean, default: false },
    storageRoom: { type: Boolean, default: false },
    laundryRoom: { type: Boolean, default: false },
    roomDimensions: { type: String }, // optional description
    kitchenLayout: {
      type: String,
      enum: ['open', 'closed']
    }
  },

  // ==================== 6. INTERIOR FEATURES ====================
  interiorFeatures: {
    flooringType: {
      type: String,
      enum: ['tile', 'hardwood', 'laminate', 'carpet', 'other']
    },
    heating: { type: String },
    coolingAcType: { type: String },
    kitchenAppliances: { type: Boolean, default: false },
    waterHeater: { type: Boolean, default: false },
    smartHomeFeatures: { type: Boolean, default: false },
    internetAvailability: { type: Boolean, default: false },
    builtInWardrobes: { type: Boolean, default: false },
    walkInCloset: { type: Boolean, default: false }
  },

  // ==================== 7. EXTERIOR FEATURES ====================
  exteriorFeatures: {
    parkingSpaces: { type: Number, default: 0 },
    garage: { type: Boolean, default: false },
    garden: { type: Boolean, default: false },
    privatePool: { type: Boolean, default: false },
    balconyTerraceDetails: { type: String },
    viewType: {
      type: String,
      enum: ['city', 'sea', 'mountain', 'park', 'street', 'other']
    },
    roofAccess: { type: Boolean, default: false },
    fenceWall: { type: Boolean, default: false }
  },

  // ==================== 8. BUILDING FEATURES ====================
  buildingFeatures: {
    elevator: { type: Boolean, default: false },
    securityConcierge: { type: Boolean, default: false },
    cctv: { type: Boolean, default: false },
    gym: { type: Boolean, default: false },
    sharedPool: { type: Boolean, default: false },
    visitorParking: { type: Boolean, default: false },
    wheelchairAccessible: { type: Boolean, default: false },
    petsAllowed: { type: Boolean, default: false }
  },

  // ==================== 9. COMMUNITY & NEIGHBORHOOD ====================
  community: {
    nearbySchools: { type: Boolean, default: false },
    nearbyHospital: { type: Boolean, default: false },
    nearbyMetroPublicTransport: { type: Boolean, default: false },
    nearbyShoppingMall: { type: Boolean, default: false },
    nearbyPark: { type: Boolean, default: false },
    nearbyAirport: { type: Boolean, default: false },
    noiseLevel: {
      type: String,
      enum: ['quiet', 'moderate', 'noisy']
    },
    walkabilityScore: { type: Number } // calculated via API
  },

  // ==================== 10. UTILITIES & MAINTENANCE ====================
  utilities: {
    waterSource: { type: String },
    electricityProvider: { type: String },
    gasAvailability: { type: Boolean, default: false },
    sewageSystem: { type: Boolean, default: false },
    internetOptions: { type: String },
    hoaCondoFees: { type: Number },
    propertyTax: { type: Number }
  },

  // ==================== 11. LEGAL & FINANCIAL INFORMATION ====================
  legal: {
    ownershipType: {
      type: String,
      enum: ['freehold', 'leasehold']
    },
    titleDeedAvailable: { type: Boolean, default: false },
    mortgageAllowed: { type: Boolean, default: false },
    developerName: { type: String },
    projectName: { type: String }, // for off-plan
    completionDate: { type: Date }, // off-plan
    paymentPlan: {
      bookingFee: { type: Number },
      downPayment: { type: Number },
      milestones: { type: String } // description of payment milestones
    }
  },

  // ==================== 12. MEDIA & FILE UPLOADS ====================
  media: {
    photos: [{ type: String }],
    videos: [{ type: String }],
    virtualTour360: { type: String },
    floorPlans: [{ type: String }],
    documents: {
      priceSheet: { type: String },
      brochure: { type: String },
      layout: { type: String },
      titleDeed: { type: String }
    }
  },

  // ==================== 13. CALCULATED / AUTO-GENERATED FIELDS ====================
  calculated: {
    pricePerSqm: { type: Number },
    pricePerSqft: { type: Number },
    propertyAge: { type: Number },
    estimatedMortgagePayment: { type: Number },
    estimatedRentalYield: { type: Number },
    walkScore: { type: Number },
    schoolsNearbyRadius: { type: Number },
    listingScore: { type: Number }, // quality score
    seoSlug: { type: String },
    uniqueListingId: { type: String },
    daysOnMarket: { type: Number },
    viewsCount: { type: Number, default: 0 },
    savesCount: { type: Number, default: 0 }
  },

  // ==================== 14. OPTIONAL ADVANCED FIELDS ====================
  advanced: {
    energyEfficiencyRating: { type: String },
    solarPanelAvailability: { type: Boolean, default: false },
    smartLocks: { type: Boolean, default: false },
    evChargingStation: { type: Boolean, default: false },
    earthquakeResistanceRating: { type: String },
    virtualStaging: { type: Boolean, default: false },
    agentRating: { type: Number },
    developerRating: { type: Number },
    verifiedListing: { type: Boolean, default: false },
    boostedListing: { type: Boolean, default: false }
  },

  // Owner reference
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  // Legacy fields for backward compatibility
  type: { type: String }, // deprecated: use propertyType instead
  price: { type: Number }, // deprecated: use pricing.price instead
  images: [{ type: String }] // deprecated: use media.photos instead

}, { timestamps: true });

// Pre-save middleware to calculate fields
propertySchema.pre('save', function(next) {
  // Calculate price per sqm and sqft
  if (this.pricing?.price && this.specifications?.builtUpArea) {
    this.calculated = this.calculated || {};
    this.calculated.pricePerSqm = this.pricing.price / this.specifications.builtUpArea;
    this.calculated.pricePerSqft = this.calculated.pricePerSqm / 10.7639; // 1 sqm = 10.7639 sqft, so price per sqft = price per sqm / 10.7639
  }

  // Calculate property age
  if (this.specifications?.yearBuilt) {
    this.calculated = this.calculated || {};
    this.calculated.propertyAge = new Date().getFullYear() - this.specifications.yearBuilt;
  }

  // Generate SEO slug from title
  if (this.title) {
    this.calculated = this.calculated || {};
    this.calculated.seoSlug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  // Generate unique listing ID if not exists (using MongoDB ObjectId for uniqueness)
  if (!this.calculated?.uniqueListingId) {
    this.calculated = this.calculated || {};
    this.calculated.uniqueListingId = 'PROP-' + this._id.toString();
  }

  // Calculate annual rent from monthly rent
  if (this.pricing?.monthlyRent && !this.pricing?.annualRent) {
    this.pricing.annualRent = this.pricing.monthlyRent * 12;
  }

  next();
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
