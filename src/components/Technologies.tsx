
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import { CustomCard } from './Card';
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const arrayTechnologies = [
    {
        title: 'React',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        title: 'NodeJS',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
    },
    {
        title: 'MongoDB',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
    },
    {
        title: 'Express',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'
    },
    {
        title: 'JavaScript',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        title: 'TypeScript',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
        title:'MySQL',
        image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'
    },
    {
        title:'PostgreSQL',
        image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'
    },
    {
        title:'Gcloud',
        image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
    }
]

const arrayTechnologies2 = [
    {
        title: 'React Native',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        title: 'Angular',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
    },
    {
        title: 'HTML',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
    },
    {
        title: 'Java',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg'
    },
    {
        title: 'Python',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
        title: 'Docker',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg'
    },
    {
        title: 'Git',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
    },
    {
        title:'Bitbucket',
        image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original-wordmark.svg'
    },
    {
        title:'AWS',
        image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
    }
]
export const Technologies = () => {
    return (
        <section id="technologies">
            <Container>
                <Row>
                    <Col >
                        <h1 className='technologies-text'>
                            Technologies
                        </h1>
                    </Col>
                    <Col xs={12} md={12} className='carousel' >
                        <Carousel responsive={responsive} infinite={true}
                            autoPlay={true}
                            className='slider'
                        >
                            {
                                arrayTechnologies.map((item, index) => {
                                    return (
                                        <CustomCard
                                            title={item.title}
                                            image={item.image}
                                        />
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                    <Col xs={12} md={12} className='carousel' >
                        <Carousel responsive={responsive} infinite={true}
                            autoPlay={true}
                            className='slider'
                            rtl={true}
                        >
                            {
                                arrayTechnologies2.map((item, index) => {
                                    return (
                                        <CustomCard
                                            title={item.title}
                                            image={item.image}
                                        />
                                    )
                                })
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
