module.exports = {
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    borderColor: state.isFocused ? '#2E64D9' : '#C7CBD6',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(46, 100, 217, 0.25)' : null,
    minWidth: 120,
    minHeight: 34,
    '&:hover': {
      borderColor: state.isFocused ? '#2E64D9' : '#C7CBD6',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
  }),
  placeholder: provided => ({
    ...provided,
    color: '#8F9BB3',
    marginLeft: 10,
  }),
  singleValue: provided => ({
    ...provided,
    color: 'inherit',
    marginLeft: 10,
  }),
  multiValue: provided => ({
    ...provided,
    background: '#D5D9E0',
    borderRadius: 3,
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: 'inherit',
    fontSize: 14,
    lineHeight: '24px',
    paddingTop: 0,
    paddingLeft: 8,
    paddingRight: 4,
    paddingBottom: 0,
  }),
  multiValueRemove: provided => ({
    ...provided,
    borderRadius: 3,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    ':hover': {
      backgroundColor: 'transparent',
      color: '#D63921',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    background: '#C7CBD6',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: 4,
    paddingTop: 6,
    paddingBottom: 6,
    color: '#6a7694',
    ':hover': {
      color: 'inherit',
    },
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: 4,
    paddingTop: 6,
    paddingBottom: 6,
    color: '#6a7694',
    ':hover': {
      color: '#D63921',
    },
  }),
  menu: provided => ({
    ...provided,
    boxShadow: '0 0 0 1px rgba(10, 24, 54, 0.06), 0 2px 16px rgba(10, 24, 54, 0.1)',
    zIndex: 400,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'inherit',
    // eslint-disable-next-line
    background: state.isSelected ? '#2E64D9' : state.isFocused ? '#E4E6EB' : 'transparent'
  }),
}
