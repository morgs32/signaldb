import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const List = styled.ul`

`
const Item = styled.li`

`
const Inner = styled.div`

`

// Features:
// * List of all collections in the database. Allow querying and modification of the data
// * History of all changes made to the database. Allow to revert to a previous state. Allow grouping similar rows
// * List of all present and past cursors. Show callstack of the cursor creation. Show query time
// * Show potential optimizations. Queries that take too long. Show alerts if there are happen too many queries or modifications in a short period of time

const DevTools = () => {
  const [view, setView] = useState('collections')
  return (
    <Wrapper>
      <List>
        <Item onClick={() => setView('collections')}>Collections</Item>
        <Item onClick={() => setView('changes')}>Changes</Item>
        <Item onClick={() => setView('cursors')}>Active Cursors</Item>
        <Item onClick={() => setView('queries')}>Queries</Item>
      </List>
      <Inner>
        {view === 'collections' && <Collections />}
        {view === 'changes' && <Changes />}
        {view === 'cursors' && <Cursors />}
        {view === 'optimizations' && <Queries />}
      </Inner>
    </Wrapper>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<DevTools />)
