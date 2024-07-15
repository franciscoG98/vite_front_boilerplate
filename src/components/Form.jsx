import React from 'react'

const Form = () => {
  return (
    <>
      <form className='form'>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="first_name">
            First Name
          </label>
          <input className="form__input" type="text" name="first_name" id="first_name" />
        </fieldset>

        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="last_name">
            Last Name
          </label>
          <input className="form__input" type="text" name="last_name" id="last_name" />
        </fieldset>

        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="email_address">
            Email
          </label>
          <input className="form__input" type="email" name="email_address" id="email_address" />
        </fieldset>

        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="phone_number">
            Phone
          </label>
          <input className="form__input" type="tel" name="phone_number" id="phone_number" />
        </fieldset>

        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="birth_date">
            Birth Date
          </label>
          <input className="form__input" type="date" name="birth_date" id="birth_date" />
        </fieldset>

        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="country">
            Country
          </label>
          <input className="form__input" type="text" name="country" id="country" />
        </fieldset>

        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="city">
            City
          </label>
          <input className="form__input" type="text" name="city" id="city" />
        </fieldset>

        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor="zip_code">
            Zip Code
          </label>
          <input className="form__input" type="number" name="zip_code" id="zip_code" />
        </fieldset>
      </form>
      <button type="submit" className='btn form__btn'>Submit</button>
    </>
  )
}

export default Form
