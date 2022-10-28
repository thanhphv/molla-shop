import React from 'react'
import { useDispatch } from 'react-redux'
import './sort.css'
import { actSortByName, actSortByPrice } from '../../../action'

const Sort = () => {
    const dispatch = useDispatch()


    const handleChange = (event) => {
        if (event.target.value === "1") {
            console.log('change name')
            onHandleSortByName('name', 1)
        }
        if (event.target.value === "2") {
            console.log('change price')
            onHandleSortByPrice('price', 2)
        }
    }

    const onHandleSortByName = (sortBy, sortValue) => {
        const action = actSortByName({
            by: sortBy,
            value: sortValue
        });
        dispatch(action)
    }

    const onHandleSortByPrice = (sortBy, sortValue) => {
        const action = actSortByPrice({
            by: sortBy,
            value: sortValue
        });
        dispatch(action)
    }

    return (
        <div>
            <span>Sort by: </span>
            <select onChange={handleChange}>
                <option value="0">Default</option>
                <option value="1">Name</option>
                <option value="2">Price</option>
            </select>
            <i className="fa fa-th-list"></i>
            <i className="fa fa-th"></i>
        </div>
    )
}

export default Sort
