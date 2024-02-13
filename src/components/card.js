import React from 'react'

export default function Card() {
    return (
        <div>
            <div className="card m-3" style={{ "width": "25%", "maxHeight": "360px" }}>
            <img src="https://source.unsplash.com/random/500x500?Burger" className="card-img-top" alt="..." />
            </div>
                <div className="card-body" >
               
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Yhis is a card</p>
                    <div className='container w-100'>
                        <select className='m-2 rounded h-100  text-center bg-danger text-light'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1} className='text-light'>{i + 1} </option>
                                    )

                                })

                            }
                        </select>
                        <select name="" id="" className='h-100 m-2 text-center bg-danger rounded text-light '>
                            <option value="half" >HALF</option>
                            <option value="full">FULL</option>
                        </select>
                        <div className='bg-danger d-inline m-2 text-light'>
                            Total Price
                        </div>
                    </div>
                </div>
            
        </div>
    )
}
