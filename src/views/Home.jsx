import { Col, Row } from 'antd'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Loading } from '../components'
import Provider from '../providers/Provider'
import { isEmpty } from 'lodash'

export default function Home() {
    const [topStory, setTopStory] = useState([])
    const getTopStory = async () => {
        await Provider.get('/topstories.json').then(async (res) => {
            const dataRes = res.slice(0, 20)
            await Promise.all(
                dataRes.map(async (item) => {
                    return await Provider.get('/item/' + item + '.json')
                })
            ).then((res) => {
                setTopStory(res)
            })
        })
    }

    useEffect(() => {
        getTopStory()
    }, [])

    return (
        <div className="container">
            {isEmpty(topStory) ? (
                <Loading />
            ) : (
                topStory.map((item, key) => {
                    return (
                        <Row className="card-data" key={key}>
                            <Col
                                lg={2}
                                md={3}
                                sm={3}
                                xs={3}
                                style={{ textAlign: '-webkit-center' }}
                            >
                                <h3 className="number">{key + 1}</h3>
                            </Col>
                            <Col lg={22} md={21} sm={21} xs={21}>
                                <div>
                                    <h2 className="title">{item.title}</h2>
                                    <h3 className="subtitle">
                                        {isEmpty(item.url)
                                            ? ''
                                            : `(${item.url})`}
                                    </h3>
                                </div>
                                <Row>
                                    <Col span={12} style={{ color: '#4F78B5' }}>
                                        <span>
                                            {item.score} points |{' '}
                                            {item.descendants} comments
                                        </span>
                                    </Col>
                                    <Col
                                        span={12}
                                        style={{
                                            textAlign: 'end',
                                            color: '#898989',
                                        }}
                                    >
                                        <span>
                                            by {item.by},{' '}
                                            {moment(item.time)
                                                .startOf('hour')
                                                .fromNow()}
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
                })
            )}
        </div>
    )
}
