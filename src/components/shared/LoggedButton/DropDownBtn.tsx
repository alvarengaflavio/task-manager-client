import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import {
  Dropbtn,
  DropDownContent,
  DropDownLi,
  StyledDropDownDiv,
  StyledUl,
  SubA,
} from './StyledDropDownBtn'

export function DropDownButton(props: Props) {
  const navigate = useNavigate()
  const handleClick = (value: string) => {
    if (value === 'user') {
      navigate('/user')
    }

    if (value === 'login') {
      props.handleLogout()
    }
  }

  return (
    <StyledDropDownDiv>
      <StyledUl>
        <DropDownLi>
          <Dropbtn onClick={() => handleClick('DropDown')}>
            <FaUserAlt size={20} />
          </Dropbtn>
          <DropDownContent>
            <SubA onClick={() => handleClick('user')}>Preferences</SubA>
            <SubA onClick={() => handleClick('login')}>Logout</SubA>
          </DropDownContent>
        </DropDownLi>
      </StyledUl>
    </StyledDropDownDiv>
  )
}

type Props = {
  handleLogout: () => void
}
