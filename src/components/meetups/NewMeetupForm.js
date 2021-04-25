import React from 'react'
import { userRef } from 'react'
import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card'

function NewMeetupForm() {
    const titleInputRef = userRef()
    const imageInputRef = userRef()
    const addressInputRef = userRef()
    const descriptionInputRef = userRef()

    const submitHandler = (e) => {
        e.prevenDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDescription = descriptionInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address : enteredAddress,
            description: enteredDescription
        }
    }
    
    return (
      <Card>
          <form className={classes.form} onSubmit={submitHandler}>
              <div className={classes.control}>
                  <label htmlFor="title">Meetup Title</label>
                  <input type="text" required id="title" ref={titleInputRef}/>
              </div>
              <div className={classes.control}>
                  <label htmlFor="image">Meetup Image</label>
                  <input type="url" required id="image" ref={imageInputRef}/>
              </div>
              <div className={classes.control}>
                  <label htmlFor="address">Meetup Address</label>
                  <input type="text" required id="address" ref={addressInputRef}/>
              </div>
              <div className={classes.control}>
                  <label htmlFor="description">Meetup Description</label>
                  <textarea id="description" required row="5" ref={descriptionInputRef}/>
              </div>
              <div className={classes.action}>
                  <button>Add Meetup</button>
              </div>
          </form>
      </Card>
    )
}

export default NewMeetupForm
