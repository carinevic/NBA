import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {

    const books = props.books.map((item, index) =>(
        <BookItem item = {item} key={index}/>
    ))
    return(
        <div>
            {books}
        </div>
    )
   
}

export default BookList;
