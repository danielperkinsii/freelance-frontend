import React from 'react'

class ProjectEditForm extends React.Component {
    state = {
        projectTitle: this.props.projectBeingEdited.projectTitle,
        projectDescription: this.props.projectBeingEdited.projectDescription,
        projectDueDate: this.props.projectBeingEdited.projectDueDate,
        contactId: this.props.projectBeingEdited.contactId
    }

    handleChange = (event) => {
        console.log(event.currentTarget.value)
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    // componentDidMount() {
    //     this.setState({
    //         firstName: this.props.contactBeingEdited.firstName,
    //         lastName: this.props.contactBeingEdited.lastName,
    //         phoneNumber: this.props.contactBeingEdited.phoneNumber,
    //         email: this.props.contactBeingEdited.email,
    //         img: this.props.contactBeingEdited.img,
    //     })
        
    // }

    render () {
        return (
            <div>
               <h2>Edit Project</h2> 
                <form onSubmit={(event) => {this.props.updateProject(event, this.state)}}>

                    <label htmlFor='projectTitle'></label>
                    <input type='text' id='projectTitle' name='projectTitle' onChange={this.handleChange} value={this.props.projectBeingEdited.projectTitle} /><br/>

                    <label htmlFor='projectDescription'></label>
                    <input type='textarea' rows='3' id='projectDescription' name='projectDescription' onChange={this.handleChange} value={this.props.projectBeingEdited.projectDescription} /><br/>

                    <label htmlFor='projectDueDate'></label>
                    <input type='text' id='projectDueDate' name='projectDueDate' onChange={this.handleChange} value={this.props.projectBeingEdited.projectDueDate} /><br/>

                    <button type='submit' value='Done'>Done</button>
                </form>
            </div>
        )
    }
}

export default ProjectEditForm