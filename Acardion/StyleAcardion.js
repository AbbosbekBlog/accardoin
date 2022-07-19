import styled from 'styled-components'
export const Title = styled.h1`
  color: #111;
  text-align: center;
`
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
export const Content = styled.div`
  width: 1200px;

  border: 1px solid white;
  boeder-radius: 10px;
  padding: 20px;
  background: #ccc;
`
export const Box = styled.div`
width: 100%
margin-top: 20px;

justify-content: space-between;


.box{
 
    flex-deraction: column;
    
    margin-top: 20px;
  padding:10px;
  border-radius: 3px;
    width: 550px;
    background: red;
    transition: all 0.2s linear;
}
.name{
    color: white;
}
.flex{
    display: flex;
    justify-content: space-between;
}
hr{
    margin-top: 20px
}
.jobs{
    text-align:center;
    margin-top: 20px;
    color:white;
    font-size: 20px;
    
}
.plus{
    color: green;
    transition: all 0.3s linear;
    font-size: 25px;
}
button{
    transition: all 0.3s linear;
    border: 1px solid yellow;
    border-radius:4px;
    
}

}
.minus{
    color: red;
    transition: all 0.3s linear;
    font-size: 25px;
   
}
.text-content{
    color: white;
    transition: all 0.3s linear;
    margin-top:20px;
    

}
`
