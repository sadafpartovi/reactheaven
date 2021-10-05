function PhoneBookForm({setName, setLastName, setPhone, handleSubmit}) {


  return (
    <form onSubmit={handleSubmit} >
      <label>First name:</label>
      <br />
      <input

        className='userFirstname'
        name='userFirstname'
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input

        className='userLastname'
        name='userLastname'
        type='text'
         onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input

        className='userPhone'
        name='userPhone'
        type='text'
         onChange={(e) => setPhone(e.target.value)}
      />
      <br/>
      <input

        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

export default PhoneBookForm;