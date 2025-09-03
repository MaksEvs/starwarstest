import { Link } from "react-router-dom"
import { HeaderButtonWrapper, HeaderNavigateButton, HeaderWrapper, HeaderLogoWrapper } from "./styles"

export const Header = () => {

  return (
    <div>
      <div>
        <div>
          logo
        </div>
        <Link to={'/'}>
          <button>Home</button>
        </Link>
        
        <Link to={'/characters'}>
          <button>Characters</button>
        </Link>
      </div>
    </div>
  )
}
    //     <HeaderWrapper>
    //   <HeaderLogoWrapper>
    //     logo
    //   </HeaderLogoWrapper>
    //   <HeaderButtonWrapper>
    //     <Link to={'/'}>
    //       <HeaderNavigateButton>Home</HeaderNavigateButton>
    //     </Link>
        
    //     <Link to={'/characters'}>
    //       <HeaderNavigateButton>Characters</HeaderNavigateButton>
    //     </Link>
    //   </HeaderButtonWrapper>
    // </HeaderWrapper>