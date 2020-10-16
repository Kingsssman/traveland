import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import ImageSlider from '../../utils/FileUpload/ImageSlider';
import SearchFeature from './Sections/SearchFeature';
import PriceFeature from './Sections/PriceFeature';

const { Meta } = Card;

function LandingPage() {
    const [Products, setProducts] = useState([]);
    const [Filters, setFilters] = useState({
        continents: [],
        price: [],
    });
    const [SearchTerms, setSearchTerms] = useState('');

    useEffect(() => {
        const variables = {};
        getProducts(variables);
    }, []);

    const getProducts = variables => {
        Axios.post('/api/product/getProducts', variables).then(response => {
            if (response.data.success) {
                if (variables.loadMore) {
                    setProducts([...Products, ...response.data.products]);
                } else {
                    setProducts(response.data.products);
                }
            } else {
                alert('Failed to fectch product datas');
            }
        });
    };

    const renderCards = Products.map((product, index) => {
        return (
            <Col lg={6} md={8} xs={24}>
                <Card
                    hoverable={true}
                    cover={
                        <a href={`/product/${product._id}`}>
                            {' '}
                            <ImageSlider images={product.images} />
                        </a>
                    }
                >
                    <Meta
                        title={product.title}
                        description={`$${product.price}, $${product.continent}`}
                    />
                </Card>
            </Col>
        );
    });

    const updateSearchTerms = newSearchTerm => {
        const variables = {
            filters: Filters,
            searchTerm: newSearchTerm,
        };

        // setSkip(0);
        setSearchTerms(newSearchTerm);

        getProducts(variables);
    };

    const showFilteredResults = filters => {
        const variables = {
            filters: filters,
        };

        getProducts(variables);
    };

    // const handlePrice = value => {
    //     const data = price;
    //     let array = [];

    //     for (let key in data) {
    //         if (data[key]._id === parseInt(value, 10)) {
    //             array = data[key].array;
    //         }
    //     }
    //     console.log('array', array);
    //     return array;
    // };

    // const handleFilters = (filters, category) => {
    //     const newFilters = { ...Filters };

    //     newFilters[category] = filters;

    //     if (category === 'price') {
    //         let priceValues = handlePrice(filters);
    //         newFilters[category] = priceValues;
    //     }

    //     showFilteredResults(newFilters);
    //     setFilters(newFilters);
    // };

    return (
        <div>
            <section id="tours-overview">
                <h1>Top Travel Tours For you</h1>
                <SearchFeature refreshFunction={updateSearchTerms} />
                <form className="filter-box">
                    <PriceFeature />
                    <input
                        type="text"
                        className="filter-field location"
                        placeholder="Location"
                    ></input>
                    <button className="filter-btn">Filter</button>
                </form>
            </section>

            <div style={{ width: '75%', margin: '1rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2> Start's Journey Right Now</h2>
                    <br />
                </div>

                {/* Filter  */}

                {/* <Row gutter={[16, 16]}>
                    <Col lg={12} xs={24}>
                        <CheckBox
                            list={continents}
                            handleFilters={filters =>
                                handleFilters(filters, 'continents')
                            }
                        />
                    </Col>
                    <Col lg={12} xs={24}>
                        <RadioBox
                            list={price}
                            handleFilters={filters =>
                                handleFilters(filters, 'price')
                            }
                        />
                    </Col>
                </Row> */}

                {Products.length === 0 ? (
                    <div
                        style={{
                            display: 'flex',
                            height: '300px',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <h2>No Travel Tours Now ...</h2>
                    </div>
                ) : (
                    <div>
                        <Row gutter={[16, 16]}>{renderCards}</Row>
                    </div>
                )}
                <br />
                <br />
            </div>
        </div>
    );
}

export default LandingPage;
