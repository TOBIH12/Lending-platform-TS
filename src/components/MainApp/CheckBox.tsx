

type CheckProps = {
    check?: boolean
    firstAccountCheck?: boolean
    secondAccountCheck?: boolean
}

type CancelProps = {
  handleModalVisibility?: ()=>void
  handleSecondModalVisibility?: ()=>void
}
type NameProps ={
  name: string
  openThirdModalFunc?: ()=>void
}
type SwitchProps = {
  isOn: boolean
  handleToggle: ()=>void
}
const CheckBox = ({check, firstAccountCheck, secondAccountCheck}: CheckProps) => {
  return (
    <div className="checkBoxContainer">
      <input type="checkbox" name="" id="" checked={check || firstAccountCheck ||secondAccountCheck} className="checkBox"/>
    </div>
  )
}

export const Cancel = ({handleModalVisibility, handleSecondModalVisibility}: CancelProps) => {
  return (
    <div>
      <button className="cancelBtn" onClick={handleModalVisibility || handleSecondModalVisibility}>Cancel</button>
    </div>
  )
}

export const Next = ({name, openThirdModalFunc}: NameProps) => {
  return (
    <div>
      <button className="nextBtn" onClick={openThirdModalFunc}>{name}</button>
    </div>
  )
}

export const Switch = ({isOn, handleToggle}: SwitchProps) =>{
return (
  <label className="switch">
    <input type="checkbox" checked={isOn} onChange={handleToggle} />
    <span className="slider round"></span>
  </label>
)
}

export default CheckBox
