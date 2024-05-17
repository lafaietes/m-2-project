import React from 'react';
import FormInput from './FormInput';

function AddressInput({ address, onAddressChange }) {
  return (
    <div className="mb-3">
      <h6>Address:</h6>
      <FormInput
        label="Street"
        type="text"
        name="street"
        placeholder="Enter street"
        value={address.street}
        onChange={(e) => onAddressChange('street', e.target.value)}
      />
      <FormInput
        label="Number"
        type="text"
        name="number"
        placeholder="Enter number"
        value={address.number}
        onChange={(e) => onAddressChange('number', e.target.value)}
      />
      <FormInput
        label="Postal Code"
        type="text"
        name="postal"
        placeholder="Enter postal code"
        value={address.postal}
        onChange={(e) => onAddressChange('postal', e.target.value)}
      />
      <FormInput
        label="City"
        type="text"
        name="city"
        placeholder="Enter city"
        value={address.city}
        onChange={(e) => onAddressChange('city', e.target.value)}
      />
      <FormInput
        label="Country"
        type="text"
        name="country"
        placeholder="Enter country"
        value={address.country}
        onChange={(e) => onAddressChange('country', e.target.value)}
      />
    </div>
  );
}

export default AddressInput;
