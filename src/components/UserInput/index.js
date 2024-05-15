import {UserInputItem, UserEnteredDetails} from './styledComponets'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText} : {textLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}

export default UserInput
