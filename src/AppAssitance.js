import React, { Component} from 'react'
import SelectBox from './features/selec-box'

class AppAssitance extends Component{

    render(){
        return <div>
            <h1>Asistencia</h1>
            <div> style={{margin: '16px', position: 'relative'}}>
                <SelectBox
                width={200}
                name="class_id"
                items={[
                    {value: 'Matematicas', id: 1},
                    {value: 'Estudios Sociales', id: 1},
                    {value: 'Español', id: 1},
                    {value: 'Civica', id: 2},
                    {value: 'Idioma', id: 3},
                    {value: 'Quimica', id: 4},
                    {value: 'Biologia', id: 5},
                    {value: 'Fisica', id: 6},
                ]}
                />
            </div>
        </div>
    }
}
export default AppAssitance