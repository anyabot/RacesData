export interface Race {
  "href": string,
  "prix": string,
  "date": string,
  "winner": string,
  "car": string,
  "point": string,
  "time": string,
}

export interface Driver {
  "href": string,
  "position": string,
  "driver": string,
  "nationality": string,
  "car": string,
  "point": string
}

export interface Team {
  "href": string,
  "position": string,
  "team": string,
  "point": string
}