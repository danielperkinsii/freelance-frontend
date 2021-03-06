import React from 'react'

let widget

class NewContact extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        company: '',
        phoneNumber: '',
        email: '',
        img: '',
        lead: false,
        notes: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    handleSubmit = () => {
        fetch(this.props.baseURL + '/api/contacts/', {
            crossDomain: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
        .then((res) => {
            res.json()
        })
        .then(resJson => {
            this.props.handleAddContact(resJson)
            this.setState({
                firstName: '',
                lastName: '',
                company: '',
                phoneNumber: '',
                email: '',
                img: '',
                lead: false,
                notes: '',
                show: false
            })
        })
        .then(data => {
            this.props.getContacts()
        })
        .catch(error => {
            console.error({'Error': error})
        })
    }

    showWidget = () => {
        widget.open()
    }

    checkImageUpload = (result) => {
        if (result.event === 'success') { 
            this.setState({
                img: result.info.secure_url,
            })
        } else {
            console.log('No image has been uploaded from Cloudinary.')
        }
    }

    handleCheck = (event) => {
        this.setState({
            lead: event.target.checked
        })
    }

    render () {
        widget = window.cloudinary.createUploadWidget({
            cloudName: 'dwjdyrkww', 
            uploadPreset: 'nj5pg9gg'}, (error, result) => { 
                if (error) {
                    console.log(error)
                } else {
                    this.checkImageUpload(result)
                }
            })

        return (
            <div>
               <h2>New Contact</h2> 
                    <button 
                    id="upload_widget" 
                    onClick={this.showWidget}>
                        Upload files
                    </button>
                    <br/>
                <form 
                    onSubmit={this.handleSubmit}>
                    <label 
                        htmlFor='img'>
                    </label>
                    <input 
                        type='text' 
                        id='img' 
                        name='img' 
                        onChange={this.handleChange} 
                        value={this.state.img} 
                        placeholder='add photo'/>
                    <br/>
                    <label 
                        htmlFor='firstName'>
                    </label>
                    <input 
                        type='text' 
                        id='firstName' 
                        name='firstName' 
                        onChange={this.handleChange} 
                        value={this.state.firstName} 
                        placeholder='First name'/>
                    <br/>
                    <label 
                        htmlFor='lastName'>
                    </label>
                    <input 
                        type='text' 
                        id='lastName' 
                        name='lastName' 
                        onChange={this.handleChange} 
                        value={this.state.lastName} 
                        placeholder='Last name'/>
                    <br/>
                    <label 
                        htmlFor='company'>
                    </label>
                    <input 
                        type='text' 
                        id='company' 
                        name='company' 
                        onChange={this.handleChange} 
                        value={this.state.company} 
                        placeholder='company'/>
                    <br/>
                    <label 
                        htmlFor='phoneNumber'>
                    </label>
                    <input 
                        type='text' 
                        id='phoneNumber' 
                        name='phoneNumber' 
                        onChange={this.handleChange} 
                        value={this.state.phoneNumber} 
                        placeholder='phone'/>
                    <br/>
                    <label 
                        htmlFor='email'>
                    </label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        placeholder='email'/>
                    <br/>
                    <label 
                        htmlFor='lead'>
                        Business Lead
                    <input 
                        type='checkbox' 
                        id='lead' 
                        name='lead' 
                        checked={this.state.lead} 
                        onChange={(e)=>{this.handleCheck(e)}}/>
                    </label>
                    <br/>
                    <button 
                        type='submit' 
                        value='Done'>
                        Done
                    </button>
                </form>
            </div>
        )
    }
}

export default NewContact