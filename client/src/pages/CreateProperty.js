import React, { useState } from 'react';
import { createProperty } from '../services/api';

const CreateProperty = () => {
  // 1. Basic Property Information
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [listingStatus, setListingStatus] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [furnishing, setFurnishing] = useState('');
  const [purpose, setPurpose] = useState('');

  // 2. Location Details
  const [fullAddress, setFullAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [floorNumber, setFloorNumber] = useState('');
  const [unitNumber, setUnitNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [nearbyLandmarks, setNearbyLandmarks] = useState('');

  // 3. Pricing Details
  const [price, setPrice] = useState('');
  const [negotiable, setNegotiable] = useState(false);
  const [currency, setCurrency] = useState('AZN');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');
  const [utilitiesIncluded, setUtilitiesIncluded] = useState(false);
  const [minimumContractPeriod, setMinimumContractPeriod] = useState('');

  // 4. Property Size & Specifications
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [landArea, setLandArea] = useState('');
  const [floorArea, setFloorArea] = useState('');
  const [plotWidth, setPlotWidth] = useState('');
  const [plotLength, setPlotLength] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [renovationYear, setRenovationYear] = useState('');
  const [constructionStatus, setConstructionStatus] = useState('');
  const [totalFloorsInBuilding, setTotalFloorsInBuilding] = useState('');
  const [floorNumberOfUnit, setFloorNumberOfUnit] = useState('');

  // 5. Room Details
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [balconies, setBalconies] = useState('');
  const [maidsRoom, setMaidsRoom] = useState(false);
  const [storageRoom, setStorageRoom] = useState(false);
  const [laundryRoom, setLaundryRoom] = useState(false);
  const [roomDimensions, setRoomDimensions] = useState('');
  const [kitchenLayout, setKitchenLayout] = useState('');

  // 6. Interior Features
  const [flooringType, setFlooringType] = useState('');
  const [heating, setHeating] = useState('');
  const [coolingAcType, setCoolingAcType] = useState('');
  const [kitchenAppliances, setKitchenAppliances] = useState(false);
  const [waterHeater, setWaterHeater] = useState(false);
  const [smartHomeFeatures, setSmartHomeFeatures] = useState(false);
  const [internetAvailability, setInternetAvailability] = useState(false);
  const [builtInWardrobes, setBuiltInWardrobes] = useState(false);
  const [walkInCloset, setWalkInCloset] = useState(false);

  // 7. Exterior Features
  const [parkingSpaces, setParkingSpaces] = useState('');
  const [garage, setGarage] = useState(false);
  const [garden, setGarden] = useState(false);
  const [privatePool, setPrivatePool] = useState(false);
  const [balconyTerraceDetails, setBalconyTerraceDetails] = useState('');
  const [viewType, setViewType] = useState('');
  const [roofAccess, setRoofAccess] = useState(false);
  const [fenceWall, setFenceWall] = useState(false);

  // 8. Building Features
  const [elevator, setElevator] = useState(false);
  const [securityConcierge, setSecurityConcierge] = useState(false);
  const [cctv, setCctv] = useState(false);
  const [gym, setGym] = useState(false);
  const [sharedPool, setSharedPool] = useState(false);
  const [visitorParking, setVisitorParking] = useState(false);
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false);
  const [petsAllowed, setPetsAllowed] = useState(false);

  // 9. Community & Neighborhood
  const [nearbySchools, setNearbySchools] = useState(false);
  const [nearbyHospital, setNearbyHospital] = useState(false);
  const [nearbyMetroPublicTransport, setNearbyMetroPublicTransport] = useState(false);
  const [nearbyShoppingMall, setNearbyShoppingMall] = useState(false);
  const [nearbyPark, setNearbyPark] = useState(false);
  const [nearbyAirport, setNearbyAirport] = useState(false);
  const [noiseLevel, setNoiseLevel] = useState('');

  // 10. Utilities & Maintenance
  const [waterSource, setWaterSource] = useState('');
  const [electricityProvider, setElectricityProvider] = useState('');
  const [gasAvailability, setGasAvailability] = useState(false);
  const [sewageSystem, setSewageSystem] = useState(false);
  const [internetOptions, setInternetOptions] = useState('');
  const [hoaCondoFees, setHoaCondoFees] = useState('');
  const [propertyTax, setPropertyTax] = useState('');

  // 11. Legal & Financial Information
  const [ownershipType, setOwnershipType] = useState('');
  const [titleDeedAvailable, setTitleDeedAvailable] = useState(false);
  const [mortgageAllowed, setMortgageAllowed] = useState(false);
  const [developerName, setDeveloperName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [bookingFee, setBookingFee] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [milestones, setMilestones] = useState('');

  // 14. Optional Advanced Fields
  const [energyEfficiencyRating, setEnergyEfficiencyRating] = useState('');
  const [solarPanelAvailability, setSolarPanelAvailability] = useState(false);
  const [smartLocks, setSmartLocks] = useState(false);
  const [evChargingStation, setEvChargingStation] = useState(false);
  const [earthquakeResistanceRating, setEarthquakeResistanceRating] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const propertyData = {
      title,
      description,
      propertyType,
      listingStatus,
      occupancy: occupancy || undefined,
      furnishing: furnishing || undefined,
      purpose: purpose || undefined,
      location: {
        fullAddress: fullAddress || undefined,
        city,
        district: district || undefined,
        street: street || undefined,
        buildingName: buildingName || undefined,
        floorNumber: floorNumber ? Number(floorNumber) : undefined,
        unitNumber: unitNumber || undefined,
        coordinates: (latitude && longitude) ? {
          latitude: Number(latitude),
          longitude: Number(longitude)
        } : undefined,
        nearbyLandmarks: nearbyLandmarks ? nearbyLandmarks.split(',').map(s => s.trim()) : undefined
      },
      pricing: {
        price: price ? Number(price) : undefined,
        negotiable,
        currency,
        monthlyRent: monthlyRent ? Number(monthlyRent) : undefined,
        depositAmount: depositAmount ? Number(depositAmount) : undefined,
        paymentFrequency: paymentFrequency || undefined,
        utilitiesIncluded,
        minimumContractPeriod: minimumContractPeriod ? Number(minimumContractPeriod) : undefined
      },
      specifications: {
        builtUpArea: builtUpArea ? Number(builtUpArea) : undefined,
        landArea: landArea ? Number(landArea) : undefined,
        floorArea: floorArea ? Number(floorArea) : undefined,
        plotWidth: plotWidth ? Number(plotWidth) : undefined,
        plotLength: plotLength ? Number(plotLength) : undefined,
        yearBuilt: yearBuilt ? Number(yearBuilt) : undefined,
        renovationYear: renovationYear ? Number(renovationYear) : undefined,
        constructionStatus: constructionStatus || undefined,
        totalFloorsInBuilding: totalFloorsInBuilding ? Number(totalFloorsInBuilding) : undefined,
        floorNumberOfUnit: floorNumberOfUnit ? Number(floorNumberOfUnit) : undefined
      },
      rooms: {
        bedrooms: bedrooms ? Number(bedrooms) : undefined,
        bathrooms: bathrooms ? Number(bathrooms) : undefined,
        balconies: balconies ? Number(balconies) : undefined,
        maidsRoom,
        storageRoom,
        laundryRoom,
        roomDimensions: roomDimensions || undefined,
        kitchenLayout: kitchenLayout || undefined
      },
      interiorFeatures: {
        flooringType: flooringType || undefined,
        heating: heating || undefined,
        coolingAcType: coolingAcType || undefined,
        kitchenAppliances,
        waterHeater,
        smartHomeFeatures,
        internetAvailability,
        builtInWardrobes,
        walkInCloset
      },
      exteriorFeatures: {
        parkingSpaces: parkingSpaces ? Number(parkingSpaces) : 0,
        garage,
        garden,
        privatePool,
        balconyTerraceDetails: balconyTerraceDetails || undefined,
        viewType: viewType || undefined,
        roofAccess,
        fenceWall
      },
      buildingFeatures: {
        elevator,
        securityConcierge,
        cctv,
        gym,
        sharedPool,
        visitorParking,
        wheelchairAccessible,
        petsAllowed
      },
      community: {
        nearbySchools,
        nearbyHospital,
        nearbyMetroPublicTransport,
        nearbyShoppingMall,
        nearbyPark,
        nearbyAirport,
        noiseLevel: noiseLevel || undefined
      },
      utilities: {
        waterSource: waterSource || undefined,
        electricityProvider: electricityProvider || undefined,
        gasAvailability,
        sewageSystem,
        internetOptions: internetOptions || undefined,
        hoaCondoFees: hoaCondoFees ? Number(hoaCondoFees) : undefined,
        propertyTax: propertyTax ? Number(propertyTax) : undefined
      },
      legal: {
        ownershipType: ownershipType || undefined,
        titleDeedAvailable,
        mortgageAllowed,
        developerName: developerName || undefined,
        projectName: projectName || undefined,
        completionDate: completionDate || undefined,
        paymentPlan: {
          bookingFee: bookingFee ? Number(bookingFee) : undefined,
          downPayment: downPayment ? Number(downPayment) : undefined,
          milestones: milestones || undefined
        }
      },
      advanced: {
        energyEfficiencyRating: energyEfficiencyRating || undefined,
        solarPanelAvailability,
        smartLocks,
        evChargingStation,
        earthquakeResistanceRating: earthquakeResistanceRating || undefined
      }
    };

    try {
      await createProperty(propertyData, token);
      alert('Property created successfully!');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Error creating property');
    }
  };

  return (
    <form onSubmit={handleCreate} style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Create Property Listing</h2>

      {/* 1. BASIC PROPERTY INFORMATION */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>1. Basic Property Information</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <label>Listing Title *</label><br />
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Description</label><br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows="4" style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Property Type *</label><br />
          <select value={propertyType} onChange={e => setPropertyType(e.target.value)} required style={{ width: '100%' }}>
            <option value="">Select Property Type</option>
            <option value="apartment_condo">Apartment / Condo</option>
            <option value="house_villa_detached">House / Villa / Detached</option>
            <option value="townhouse">Townhouse</option>
            <option value="commercial_retail">Commercial Retail</option>
            <option value="office">Office</option>
            <option value="industrial_warehouse">Industrial / Warehouse</option>
            <option value="land_plot">Land / Plot</option>
            <option value="farm">Farm</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Listing Status *</label><br />
          <select value={listingStatus} onChange={e => setListingStatus(e.target.value)} required style={{ width: '100%' }}>
            <option value="">Select Listing Status</option>
            <option value="for_sale">For Sale</option>
            <option value="for_rent">For Rent</option>
            <option value="new_project_offplan">New Project / Off-plan</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Occupancy</label><br />
          <select value={occupancy} onChange={e => setOccupancy(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Occupancy</option>
            <option value="owner_occupied">Owner Occupied</option>
            <option value="vacant">Vacant</option>
            <option value="tenanted">Tenanted</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Furnishing</label><br />
          <select value={furnishing} onChange={e => setFurnishing(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Furnishing</option>
            <option value="furnished">Furnished</option>
            <option value="semi_furnished">Semi-furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Purpose</label><br />
          <select value={purpose} onChange={e => setPurpose(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Purpose</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
      </fieldset>

      {/* 2. LOCATION DETAILS */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>2. Location Details</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <label>Full Address</label><br />
          <input type="text" value={fullAddress} onChange={e => setFullAddress(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>City *</label><br />
          <input type="text" value={city} onChange={e => setCity(e.target.value)} required style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>District / Neighborhood</label><br />
          <input type="text" value={district} onChange={e => setDistrict(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Street</label><br />
          <input type="text" value={street} onChange={e => setStreet(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Building Name (for apartments)</label><br />
          <input type="text" value={buildingName} onChange={e => setBuildingName(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Floor Number</label><br />
            <input type="number" value={floorNumber} onChange={e => setFloorNumber(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Unit Number</label><br />
            <input type="text" value={unitNumber} onChange={e => setUnitNumber(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Latitude</label><br />
            <input type="number" step="any" value={latitude} onChange={e => setLatitude(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Longitude</label><br />
            <input type="number" step="any" value={longitude} onChange={e => setLongitude(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Nearby Landmarks (comma-separated)</label><br />
          <input type="text" value={nearbyLandmarks} onChange={e => setNearbyLandmarks(e.target.value)} placeholder="e.g., Central Park, Metro Station" style={{ width: '100%' }} />
        </div>
      </fieldset>

      {/* 3. PRICING DETAILS */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>3. Pricing Details</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <label>Price (Total)</label><br />
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Currency</label><br />
          <select value={currency} onChange={e => setCurrency(e.target.value)} style={{ width: '100%' }}>
            <option value="AZN">AZN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            <input type="checkbox" checked={negotiable} onChange={e => setNegotiable(e.target.checked)} />
            {' '}Negotiable
          </label>
        </div>

        <h4>For Rent:</h4>

        <div style={{ marginBottom: '10px' }}>
          <label>Monthly Rent</label><br />
          <input type="number" value={monthlyRent} onChange={e => setMonthlyRent(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Deposit Amount</label><br />
          <input type="number" value={depositAmount} onChange={e => setDepositAmount(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Payment Frequency</label><br />
          <select value={paymentFrequency} onChange={e => setPaymentFrequency(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Payment Frequency</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="semi_annual">Semi-annual</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>
            <input type="checkbox" checked={utilitiesIncluded} onChange={e => setUtilitiesIncluded(e.target.checked)} />
            {' '}Utilities Included
          </label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Minimum Contract Period (months)</label><br />
          <input type="number" value={minimumContractPeriod} onChange={e => setMinimumContractPeriod(e.target.value)} style={{ width: '100%' }} />
        </div>
      </fieldset>

      {/* 4. PROPERTY SIZE & SPECIFICATIONS */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>4. Property Size & Specifications</strong></legend>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Built-up Area (m²)</label><br />
            <input type="number" value={builtUpArea} onChange={e => setBuiltUpArea(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Land Area (m²)</label><br />
            <input type="number" value={landArea} onChange={e => setLandArea(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Floor Area (m²)</label><br />
            <input type="number" value={floorArea} onChange={e => setFloorArea(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Plot Width (m)</label><br />
            <input type="number" value={plotWidth} onChange={e => setPlotWidth(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Plot Length (m)</label><br />
            <input type="number" value={plotLength} onChange={e => setPlotLength(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Year Built</label><br />
            <input type="number" value={yearBuilt} onChange={e => setYearBuilt(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Renovation Year</label><br />
            <input type="number" value={renovationYear} onChange={e => setRenovationYear(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Construction Status</label><br />
          <select value={constructionStatus} onChange={e => setConstructionStatus(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Construction Status</option>
            <option value="ready">Ready</option>
            <option value="under_construction">Under Construction</option>
            <option value="off_plan">Off-plan</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Total Floors in Building</label><br />
            <input type="number" value={totalFloorsInBuilding} onChange={e => setTotalFloorsInBuilding(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Floor Number of Unit</label><br />
            <input type="number" value={floorNumberOfUnit} onChange={e => setFloorNumberOfUnit(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>
      </fieldset>

      {/* 5. ROOM DETAILS */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>5. Room Details</strong></legend>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Bedrooms</label><br />
            <input type="number" value={bedrooms} onChange={e => setBedrooms(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Bathrooms</label><br />
            <input type="number" value={bathrooms} onChange={e => setBathrooms(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Balconies</label><br />
            <input type="number" value={balconies} onChange={e => setBalconies(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label><input type="checkbox" checked={maidsRoom} onChange={e => setMaidsRoom(e.target.checked)} /> Maid's Room / Helper Room</label><br />
          <label><input type="checkbox" checked={storageRoom} onChange={e => setStorageRoom(e.target.checked)} /> Storage Room</label><br />
          <label><input type="checkbox" checked={laundryRoom} onChange={e => setLaundryRoom(e.target.checked)} /> Laundry Room</label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Room Dimensions (optional)</label><br />
          <input type="text" value={roomDimensions} onChange={e => setRoomDimensions(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Kitchen Layout</label><br />
          <select value={kitchenLayout} onChange={e => setKitchenLayout(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Kitchen Layout</option>
            <option value="open">Open Layout</option>
            <option value="closed">Closed Kitchen</option>
          </select>
        </div>
      </fieldset>

      {/* 6. INTERIOR FEATURES */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>6. Interior Features</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <label>Flooring Type</label><br />
          <select value={flooringType} onChange={e => setFlooringType(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Flooring Type</option>
            <option value="tile">Tile</option>
            <option value="hardwood">Hardwood</option>
            <option value="laminate">Laminate</option>
            <option value="carpet">Carpet</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Heating</label><br />
            <input type="text" value={heating} onChange={e => setHeating(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Cooling / AC Type</label><br />
            <input type="text" value={coolingAcType} onChange={e => setCoolingAcType(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label><input type="checkbox" checked={kitchenAppliances} onChange={e => setKitchenAppliances(e.target.checked)} /> Kitchen Appliances Included</label><br />
          <label><input type="checkbox" checked={waterHeater} onChange={e => setWaterHeater(e.target.checked)} /> Water Heater</label><br />
          <label><input type="checkbox" checked={smartHomeFeatures} onChange={e => setSmartHomeFeatures(e.target.checked)} /> Smart Home Features</label><br />
          <label><input type="checkbox" checked={internetAvailability} onChange={e => setInternetAvailability(e.target.checked)} /> Internet Availability</label><br />
          <label><input type="checkbox" checked={builtInWardrobes} onChange={e => setBuiltInWardrobes(e.target.checked)} /> Built-in Wardrobes</label><br />
          <label><input type="checkbox" checked={walkInCloset} onChange={e => setWalkInCloset(e.target.checked)} /> Walk-in Closet</label>
        </div>
      </fieldset>

      {/* 7. EXTERIOR FEATURES */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>7. Exterior Features</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <label>Parking Spaces</label><br />
          <input type="number" value={parkingSpaces} onChange={e => setParkingSpaces(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label><input type="checkbox" checked={garage} onChange={e => setGarage(e.target.checked)} /> Garage</label><br />
          <label><input type="checkbox" checked={garden} onChange={e => setGarden(e.target.checked)} /> Garden</label><br />
          <label><input type="checkbox" checked={privatePool} onChange={e => setPrivatePool(e.target.checked)} /> Private Swimming Pool</label><br />
          <label><input type="checkbox" checked={roofAccess} onChange={e => setRoofAccess(e.target.checked)} /> Roof Access</label><br />
          <label><input type="checkbox" checked={fenceWall} onChange={e => setFenceWall(e.target.checked)} /> Fence/Wall Around Property</label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Balcony/Terrace Details</label><br />
          <input type="text" value={balconyTerraceDetails} onChange={e => setBalconyTerraceDetails(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>View Type</label><br />
          <select value={viewType} onChange={e => setViewType(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select View Type</option>
            <option value="city">City</option>
            <option value="sea">Sea</option>
            <option value="mountain">Mountain</option>
            <option value="park">Park</option>
            <option value="street">Street</option>
            <option value="other">Other</option>
          </select>
        </div>
      </fieldset>

      {/* 8. BUILDING FEATURES */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>8. Building Features (for apartments/condos)</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <label><input type="checkbox" checked={elevator} onChange={e => setElevator(e.target.checked)} /> Elevator</label><br />
          <label><input type="checkbox" checked={securityConcierge} onChange={e => setSecurityConcierge(e.target.checked)} /> Security / Concierge</label><br />
          <label><input type="checkbox" checked={cctv} onChange={e => setCctv(e.target.checked)} /> CCTV</label><br />
          <label><input type="checkbox" checked={gym} onChange={e => setGym(e.target.checked)} /> Gym</label><br />
          <label><input type="checkbox" checked={sharedPool} onChange={e => setSharedPool(e.target.checked)} /> Shared Pool</label><br />
          <label><input type="checkbox" checked={visitorParking} onChange={e => setVisitorParking(e.target.checked)} /> Visitor Parking</label><br />
          <label><input type="checkbox" checked={wheelchairAccessible} onChange={e => setWheelchairAccessible(e.target.checked)} /> Wheelchair Accessible</label><br />
          <label><input type="checkbox" checked={petsAllowed} onChange={e => setPetsAllowed(e.target.checked)} /> Pets Allowed</label>
        </div>
      </fieldset>

      {/* 9. COMMUNITY & NEIGHBORHOOD */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>9. Community & Neighborhood</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <strong>Nearby:</strong><br />
          <label><input type="checkbox" checked={nearbySchools} onChange={e => setNearbySchools(e.target.checked)} /> Schools</label><br />
          <label><input type="checkbox" checked={nearbyHospital} onChange={e => setNearbyHospital(e.target.checked)} /> Hospital</label><br />
          <label><input type="checkbox" checked={nearbyMetroPublicTransport} onChange={e => setNearbyMetroPublicTransport(e.target.checked)} /> Metro / Public Transport</label><br />
          <label><input type="checkbox" checked={nearbyShoppingMall} onChange={e => setNearbyShoppingMall(e.target.checked)} /> Shopping Mall</label><br />
          <label><input type="checkbox" checked={nearbyPark} onChange={e => setNearbyPark(e.target.checked)} /> Park</label><br />
          <label><input type="checkbox" checked={nearbyAirport} onChange={e => setNearbyAirport(e.target.checked)} /> Airport</label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Noise Level</label><br />
          <select value={noiseLevel} onChange={e => setNoiseLevel(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Noise Level</option>
            <option value="quiet">Quiet</option>
            <option value="moderate">Moderate</option>
            <option value="noisy">Noisy</option>
          </select>
        </div>
      </fieldset>

      {/* 10. UTILITIES & MAINTENANCE */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>10. Utilities & Maintenance</strong></legend>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Water Source</label><br />
            <input type="text" value={waterSource} onChange={e => setWaterSource(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Electricity Provider</label><br />
            <input type="text" value={electricityProvider} onChange={e => setElectricityProvider(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label><input type="checkbox" checked={gasAvailability} onChange={e => setGasAvailability(e.target.checked)} /> Gas Availability</label><br />
          <label><input type="checkbox" checked={sewageSystem} onChange={e => setSewageSystem(e.target.checked)} /> Sewage System</label>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Internet Options</label><br />
          <input type="text" value={internetOptions} onChange={e => setInternetOptions(e.target.value)} style={{ width: '100%' }} />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>HOA/Condo Fees</label><br />
            <input type="number" value={hoaCondoFees} onChange={e => setHoaCondoFees(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Property Tax</label><br />
            <input type="number" value={propertyTax} onChange={e => setPropertyTax(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>
      </fieldset>

      {/* 11. LEGAL & FINANCIAL INFORMATION */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>11. Legal & Financial Information</strong></legend>

        <div style={{ marginBottom: '10px' }}>
          <label>Ownership Type</label><br />
          <select value={ownershipType} onChange={e => setOwnershipType(e.target.value)} style={{ width: '100%' }}>
            <option value="">Select Ownership Type</option>
            <option value="freehold">Freehold</option>
            <option value="leasehold">Leasehold</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label><input type="checkbox" checked={titleDeedAvailable} onChange={e => setTitleDeedAvailable(e.target.checked)} /> Title Deed Available</label><br />
          <label><input type="checkbox" checked={mortgageAllowed} onChange={e => setMortgageAllowed(e.target.checked)} /> Mortgage Allowed</label>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Developer Name</label><br />
            <input type="text" value={developerName} onChange={e => setDeveloperName(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Project Name (for off-plan)</label><br />
            <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Completion Date (off-plan)</label><br />
          <input type="date" value={completionDate} onChange={e => setCompletionDate(e.target.value)} style={{ width: '100%' }} />
        </div>

        <h4>Payment Plan (new projects):</h4>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Booking Fee</label><br />
            <input type="number" value={bookingFee} onChange={e => setBookingFee(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Down Payment</label><br />
            <input type="number" value={downPayment} onChange={e => setDownPayment(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Payment Milestones</label><br />
          <textarea value={milestones} onChange={e => setMilestones(e.target.value)} rows="3" style={{ width: '100%' }} />
        </div>
      </fieldset>

      {/* 14. OPTIONAL ADVANCED FIELDS */}
      <fieldset style={{ marginBottom: '20px', padding: '15px' }}>
        <legend><strong>14. Optional Advanced Fields</strong></legend>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>
            <label>Energy Efficiency Rating</label><br />
            <input type="text" value={energyEfficiencyRating} onChange={e => setEnergyEfficiencyRating(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label>Earthquake Resistance Rating</label><br />
            <input type="text" value={earthquakeResistanceRating} onChange={e => setEarthquakeResistanceRating(e.target.value)} style={{ width: '100%' }} />
          </div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label><input type="checkbox" checked={solarPanelAvailability} onChange={e => setSolarPanelAvailability(e.target.checked)} /> Solar Panel Availability</label><br />
          <label><input type="checkbox" checked={smartLocks} onChange={e => setSmartLocks(e.target.checked)} /> Smart Locks</label><br />
          <label><input type="checkbox" checked={evChargingStation} onChange={e => setEvChargingStation(e.target.checked)} /> EV Charging Station</label>
        </div>
      </fieldset>

      <button type="submit" style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}>Create Property</button>
    </form>
  );
};

export default CreateProperty;
