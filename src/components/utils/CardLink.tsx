import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import Link from "next/link";

interface Props {
  text: string,
  img: string,
  href: string
}

export default function CardLink({text, img, href}: Props) {
  return (
    <Link href={href} className="inline-block hover:scale-105 hover:transition-all hover:shadow-lg">
    <Card className="mt-6 hover:text-blue-500">
      <CardBody>
      <img src={img} alt="img-blur-shadow"/>
        <Typography variant="h5" color="blue-gray" className="mt-4 min-h-96 text-center text-inherit">
          {text}
        </Typography>
        
      </CardBody>
    </Card>
    </Link>
  );
}