import React, { Component }  from 'react'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'


class DatePickerCustom extends Component {

    state = {
        selectedDayStart: null,
        selectedDayEnd: null
    }

    render() {
        const dateStart = this.state.selectedDayStart ? this.state.selectedDayStart.toLocaleDateString() : null
        const dateEnd = this.state.selectedDayEnd ? this.state.selectedDayEnd.toLocaleDateString() : null

        return <DayPicker 
                    dateStart = {this.dateStart}
                    dateEnd = {this.dateEnd}
                    onDayClick={ this.handleDateChange }
                />
    }


    handleDateChange = (e, selectedDay, modifiers) => {

        if (this.state.selectedDayStart != null) {

            if (selectedDay.toLocaleDateString() >= this.state.selectedDayStart.toLocaleDateString()) {
                this.writeStateStart(selectedDay)
            } else {
                this.writeStateEnd(selectedDay)
            }
        } else {
            this.writeStateStart(selectedDay)
        }
    }

    writeStateStart = (selectedDay) => {
        this.setState({ selectedDayStart: selectedDay })
    }

    writeStateEnd = (selectedDay) => {
        this.setState({ selectedDayStart: selectedDay })
    }
}

export default DatePickerCustom