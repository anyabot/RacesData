import Flag from 'react-world-flags'
import CountryCodes from 'country-code-info';
interface Props {
  country: string
}
export default function CountryFlag({country}: Props) {
  return (
    <>
    <Flag code={ CountryCodes.findCountry({'ioc': country})?.a3 } className="inline-block w-6 mr-2"/>{CountryCodes.findCountry({'ioc': country})?.name}
    </>
  );
}