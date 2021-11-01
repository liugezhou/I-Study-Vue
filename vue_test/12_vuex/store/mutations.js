export default  {
  add(state,value){
    state.sum += value
  },
  substract(state,value){
    state.sum -= value
  },
  ADD_PERSON(state,person){
    state.personList.unshift(person)
  }
}