export type Currency = {
  amount: number,
  currency?: 'US_DOLLARS' | 'UK_POUNDS' | 'EU_EUROS',
}

export type Event = {
  active?: boolean,
  id?: string,
  badgeStatus?: string,
  badgeText?: string,
  date: Date,
  icon?: Object,
  iconColor?: string,
  name: string,
  status: string,
  url?: string,
}

export type Option = {
  value: string,
  label: string,
  selected?: boolean,
}

//  Filter Control Types (polaris)
export const FilterTypes = {
  Select: 0,
  TextField: 1,
  DateSelector: 2,
}

type FilterType = $Values<typeof FilterTypes>

type FilterBase = {
  label: string,
  key: string,
  operatorText?: string,
  type: FilterType
}

export type FilterSelect = FilterBase & {
  options: string[]
}

export type FilterTextField = FilterBase & {
  textFieldType?: string
}

export type FilterDateSelector = FilterBase & {
  minKey: string,
  maxKey: string,
  dateOptionType?: 'past' | 'future' | 'full',
}

export type Filter = FilterSelect | FilterTextField | FilterDateSelector

export type AppliedFilter = {
  key: string,
  value: string,
  label?: string,
}
