// import React, { useState } from "react";

import {
  CheckboxInput,
  CheckboxLabel,
  Equipment,
  Filters,
  FormContainer,
  LocationDiv,
  LocationInput,
  SearchButton,
  Type,
  VehicleEquipment,
} from './Filter.styles';

import sprite from '../img/svg.svg';
export const Filter = () => {
  return (
    <>
      <FormContainer>
        <LocationDiv>
          <label>Location</label>
          <LocationInput placeholder="Kyiv, Ukraine"></LocationInput>
        </LocationDiv>
        <Filters>Filters</Filters>
        <VehicleEquipment>Vehicle equipment</VehicleEquipment>
        <Equipment>
          <CheckboxLabel htmlFor="AC">
            <CheckboxInput type="checkbox" id="AC"></CheckboxInput>

            <svg width="32" height="32">
              <use xlinkHref={`${sprite}#blow`} width="32" height="32"></use>
            </svg>

            <p>AC</p>
          </CheckboxLabel>
          <CheckboxLabel htmlFor="Automatic">
            <CheckboxInput type="checkbox" id="Automatic"></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#nets`}></use>
            </svg>
            <p>Automatic</p>
          </CheckboxLabel>
          <CheckboxLabel htmlFor="Kitchen">
            <CheckboxInput type="checkbox" id="Kitchen"></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#Kitchen`}></use>
            </svg>
            <p>Kitchen</p>
          </CheckboxLabel>
          <CheckboxLabel htmlFor="TV">
            <CheckboxInput type="checkbox" id="TV"></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#tel`}></use>
            </svg>
            <p>TV</p>
          </CheckboxLabel>
          <CheckboxLabel htmlFor="Shower/WC">
            <CheckboxInput type="checkbox" id="Shower/WC"></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#dusch`}></use>
            </svg>
            <p>Shower/WC</p>
          </CheckboxLabel>
        </Equipment>
        <Type>Vehicle type</Type>
        <Equipment>
          <CheckboxLabel htmlFor="Van">
            <CheckboxInput type="checkbox" id="Van"></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#auto`}></use>
            </svg>
            <p>Van</p>
          </CheckboxLabel>
          <CheckboxLabel htmlFor="Fully-Integrated">
            <CheckboxInput
              type="checkbox"
              id="Fully-Integrated"
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#autodoor`}></use>
            </svg>
            <p>Fully Integrated</p>
          </CheckboxLabel>
          <CheckboxLabel htmlFor="Alcove">
            <CheckboxInput type="checkbox" id="Alcove"></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#autofool`}></use>
            </svg>
            <p>Alcove</p>
          </CheckboxLabel>
        </Equipment>
        <SearchButton type="submit">Search</SearchButton>
      </FormContainer>
    </>
  );
};