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
    <Link href={href}>
    <Card className="mt-6">
      <CardHeader color="blue-gray" className="relative max-h-56">
        <img src={img} alt="img-blur-shadow" />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {text}
        </Typography>
        
      </CardBody>
    </Card>
    </Link>
  );
}