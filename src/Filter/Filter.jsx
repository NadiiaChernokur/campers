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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newFilterArray } from '../redux/operation';
export const Filter = () => {
  const dispatch = useDispatch();
  // const [acChecked, setAcChecked] = useState(false);
  // const [automaticChecked, setAutomaticChecked] = useState(false);
  // const [kitchenChecked, setKitchen] = useState(false);
  // const [tvChecked, setTv] = useState(false);
  // const [showerChecked, setShower] = useState(false);
  const [vanChecked, setVan] = useState(false);
  const [fullyChecked, setFully] = useState(false);
  const [alcoveChecked, setAlcove] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const campersArrey = useSelector((state) => state.campersArray);
  const totalArrey = useSelector((state) => state.totalCampers);
  const [filteredData, setFilteredData] = useState([]);

  const [filters, setFilters] = useState({
    acChecked: false,
    automaticChecked: false,
    kitchenChecked: false,
    tvChecked: false,
    showerChecked: false,
  });
  const handleAcChange = (checked) => {
    setFilters({ ...filters, acChecked: checked });
  };

  const handleAutomaticChange = (checked) => {
    setFilters({ ...filters, automaticChecked: checked });
  };
  const handlekitchenChecked = (checked) => {
    setFilters({ ...filters, kitchenChecked: checked });
  };

  const handletvChecked = (checked) => {
    setFilters({ ...filters, tvChecked: checked });
  };

  const handleshowerChecked = (checked) => {
    setFilters({ ...filters, showerChecked: checked });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let Array1 = [];
    let Array2 = [];
    let Array3 = [];
    let Array4 = [];
    let Array5 = [];
    console.log(Array1);
    if (filters.acChecked) {
      Array1 = totalArrey.filter((auto) => auto.details.airConditioner > 0);
      console.log(Array1);
    }
    if (filters.automaticChecked) {
      Array2 = totalArrey.filter((auto) => auto.transmission === 'automatic');
      console.log(Array2);
    }

    if (filters.kitchenChecked) {
      Array3 = totalArrey.filter((auto) => auto.details.kitchen > 0);
      console.log(Array3);
    }
    if (filters.tvChecked) {
      Array4 = totalArrey.filter((auto) => auto.details.TV > 0);
      console.log(Array4);
    }
    if (filters.showerChecked) {
      Array5 = totalArrey.filter((auto) => auto.details.bathroom > 0);
      console.log(Array5);
    }

    const commonElements = totalArrey?.filter(
      (item) =>
        (!Array1.length ||
          Array1.some((element) => element._id === item._id)) &&
        (!Array2.length ||
          Array2.some((element) => element._id === item._id)) &&
        (!Array3.length ||
          Array3.some((element) => element._id === item._id)) &&
        (!Array4.length ||
          Array4.some((element) => element._id === item._id)) &&
        (!Array5.length || Array5.some((element) => element._id === item._id))
    );
    console.log(commonElements);
    setFilteredData(commonElements);
  };

  useEffect(() => {
    console.log(filteredData);
    dispatch(newFilterArray(filteredData));
  }, [filteredData]);
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
          <CheckboxLabel
            htmlFor="AC"
            style={filters.acChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="AC"
              checked={filters.acChecked}
              onChange={(e) => handleAcChange(e.target.checked)}
            ></CheckboxInput>

            <svg width="32" height="32">
              <use xlinkHref={`${sprite}#blow`} width="32" height="32"></use>
            </svg>

            <p>AC</p>
          </CheckboxLabel>
          <CheckboxLabel
            htmlFor="Automatic"
            style={filters.automaticChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="Automatic"
              checked={filters.automaticChecked}
              onChange={(e) => handleAutomaticChange(e.target.checked)}
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#nets`}></use>
            </svg>
            <p>Automatic</p>
          </CheckboxLabel>
          <CheckboxLabel
            htmlFor="Kitchen"
            style={filters.kitchenChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="Kitchen"
              checked={filters.kitchenChecked}
              onChange={(e) => handlekitchenChecked(e.target.checked)}
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#Kitchen`}></use>
            </svg>
            <p>Kitchen</p>
          </CheckboxLabel>
          <CheckboxLabel
            htmlFor="TV"
            style={filters.tvChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="TV"
              checked={filters.tvChecked}
              onChange={(e) => handletvChecked(e.target.checked)}
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#tel`}></use>
            </svg>
            <p>TV</p>
          </CheckboxLabel>
          <CheckboxLabel
            htmlFor="Shower/WC"
            style={filters.showerChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="Shower/WC"
              checked={filters.showerChecked}
              onChange={(e) => handleshowerChecked(e.target.checked)}
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#dusch`}></use>
            </svg>
            <p>Shower/WC</p>
          </CheckboxLabel>
        </Equipment>
        <Type>Vehicle type</Type>
        <Equipment>
          <CheckboxLabel
            htmlFor="Van"
            style={vanChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="Van"
              checked={vanChecked}
              onChange={(e) => setVan(e.target.checked)}
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#auto`}></use>
            </svg>
            <p>Van</p>
          </CheckboxLabel>
          <CheckboxLabel
            htmlFor="Fully-Integrated"
            style={fullyChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="Fully-Integrated"
              checked={fullyChecked}
              onChange={(e) => setFully(e.target.checked)}
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#autodoor`}></use>
            </svg>
            <p>Fully Integrated</p>
          </CheckboxLabel>
          <CheckboxLabel
            htmlFor="Alcove"
            style={alcoveChecked ? { border: '1px solid red' } : {}}
          >
            <CheckboxInput
              type="checkbox"
              id="Alcove"
              checked={alcoveChecked}
              onChange={(e) => setAlcove(e.target.checked)}
            ></CheckboxInput>
            <svg width="32" height="32">
              <use href={`${sprite}#autofool`}></use>
            </svg>
            <p>Alcove</p>
          </CheckboxLabel>
        </Equipment>
        <SearchButton type="submit" onClick={handleSearch}>
          Search
        </SearchButton>
      </FormContainer>
    </>
  );
};

// const Search = (e) => {
//   e.preventDefault();
//   let Array1 = [];
//   let Array2 = [];
//   let Array3 = [];
//   let Array4 = [];
//   let Array5 = [];

//   if (acChecked) {
//     Array1 = campersArrey.filter((auto) => auto.details.airConditioner > 0);
//   }
//   if (automaticChecked) {
//     Array2 = campersArrey.filter((auto) => auto.transmission === 'automatic');
//   }

//   if (kitchenChecked) {
//     Array3 = campersArrey.filter((auto) => auto.details.kitchen > 0);
//   }
//   if (tvChecked) {
//     Array4 = campersArrey.filter((auto) => auto.details.TV > 0);
//   }
//   if (showerChecked) {
//     Array5 = campersArrey.filter((auto) => auto.details.bathroom > 0);
//   }
//   console.log(Array3);
//   let commonElements = Array1.filter(
//     (item) =>
//       Array2.some((element) => element._id === item._id) &&
//       Array3.some((element) => element._id === item._id) &&
//       Array4.some((element) => element._id === item._id) &&
//       Array5.some((element) => element._id === item._id)
//   );
//   setFilterArray(commonElements);
//   console.log(commonElements);
// };

// let Array1 = [];
// let Array2 = [];
// let Array3 = [];
// let Array4 = [];
// let Array5 = [];

// if (filters.acChecked) {
//   Array1 = campersArrey.filter((auto) => auto.details.airConditioner > 0);
// }
// if (filters.automaticChecked) {
//   Array2 = campersArrey.filter((auto) => auto.transmission === 'automatic');
// }

// if (filters.kitchenChecked) {
//   Array3 = campersArrey.filter((auto) => auto.details.kitchen > 0);
// }
// if (filters.tvChecked) {
//   Array4 = campersArrey.filter((auto) => auto.details.TV > 0);
// }
// if (filters.showerChecked) {
//   Array5 = campersArrey.filter((auto) => auto.details.bathroom > 0);
// }

// let commonElements = Array1?.filter(
//   (item) =>
//     (!Array2 ? [] : Array2.some((element) => element._id === item._id)) &&
//     (!Array3 ? [] : Array3.some((element) => element._id === item._id)) &&
//     (!Array4 ? [] : Array4.some((element) => element._id === item._id)) &&
//     (!Array5 ? [] : Array5.some((element) => element._id === item._id))
// );

// if (filters.acChecked) {
//   const acArray = campersArrey.filter(
//     (auto) => auto.details.airConditioner > 0
//   );
//   filteredArray = filteredArray.concat(acArray);
// }
// if (filters.automaticChecked) {
//   const acArray = campersArrey.filter(
//     (auto) => auto.transmission === 'automatic'
//   );
//   filteredArray = filteredArray.concat(acArray);
// }

// if (filters.kitchenChecked) {
//   const acArray = campersArrey.filter((auto) => auto.details.kitchen > 0);
//   filteredArray = filteredArray.concat(acArray);
// }
// if (filters.tvChecked) {
//   const acArray = campersArrey.filter((auto) => auto.details.TV > 0);
//   filteredArray = filteredArray.concat(acArray);
// }
// if (filters.showerChecked) {
//   const acArray = campersArrey.filter((auto) => auto.details.bathroom > 0);
//   filteredArray = filteredArray.concat(acArray);
// }

// console.log(filteredArray);
