"use client"
import { Button, Card, CardText, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MovieCard";
import MovieForms from "./MovieForms";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ fontSize: "24px", color: "blue"}}>Home Movies List</h1>
          <h2 style={{ fontSize: "20px", color: "green"}}>Arya Perdana Irawan</h2>
          <h3 style={{ fontSize: "16px", color: "red"}}>Kelas Pemrograman Web 2023-2024</h3>
          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Button as link
            </Button>
            <Button as="a" variant="success">
              Button as link
            </Button>
          </Stack>
        </div>
      </div>

      <MovieForms />
      <MovieCard />
      
      {/* <div className="row">
        <div className="col-md-4">
            <Card className='bg-transparent text-white text-center movieImage'>
              <img className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJ9L7sxGbt6865n-xU3a9o1Lf3oC1AKFzhw&s"
              alt="Card image cap" sizes="(max-width: 768px) 100vw, (max-widthL 1200px) 50vw, 33vw"
              >
              </img>
              <div className="bg-dark p-2 m-1">
                <CardText>Patrick botak</CardText>
                <CardText>Patrick 3.8/401</CardText>
              </div>
            </Card>
        </div>

        <div className="col-md-4">
            <Card className='bg-transparent text-white text-center movieImage'>
              <img className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJ9L7sxGbt6865n-xU3a9o1Lf3oC1AKFzhw&s"
              alt="Card image cap" sizes="(max-width: 768px) 100vw, (max-widthL 1200px) 50vw, 33vw"
              >
              </img>
              <div className="bg-dark p-2 m-1">
                <CardText>Patrick botak</CardText>
                <CardText>Patrick 3.8/401</CardText>
              </div>
            </Card>
        </div>

        <div className="col-md-4">
            <Card className='bg-transparent text-white text-center movieImage'>
              <img className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJ9L7sxGbt6865n-xU3a9o1Lf3oC1AKFzhw&s"
              alt="Card image cap" sizes="(max-width: 768px) 100vw, (max-widthL 1200px) 50vw, 33vw"
              >
              </img>
              <div className="bg-dark p-2 m-1">
                <CardText>Patrick botak</CardText>
                <CardText>Patrick 3.8/401</CardText>
              </div>
            </Card>
        </div> */}
      {/* </div> */}
    </div>
  );
}
