import React, { useState } from 'react'
import { Wrapper, Title, Content, Box } from './StyleAcardion'
import data from './data'

import Items from './Items'

function Acardion() {
  const [item, setItem] = useState(data)

  return (
    <div>
      <Wrapper>
        <Content>
          <Title>Acardion For</Title>
          <Wrapper>
            <Box>
              {item?.map((items) => {
                const { id } = items
                return <Items key={id} {...items} />
              })}
            </Box>
          </Wrapper>
        </Content>
      </Wrapper>
    </div>
  )
}

export default Acardion
