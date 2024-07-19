import React from 'react'
import styled from 'styled-components'
import { categories } from '../data/data'
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;`;

const Categories = () => {
  return (
    <Container>
    {categories.map(item => (
      <CategoryItem item = {item}/>
    ))}
    </Container>
  )
}

export default Categories
