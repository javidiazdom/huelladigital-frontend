import * as React from 'react';
import './ConvocatoryVolunteers.scss';
import { Volunteer } from '../../../../../domain/models/Volunteer';
import volunteers from './VolunteersMock.json';
import { ReactComponent as ProfileSVG } from '../assets/Convocatory-icons/assignment_ind.svg';

export const ConvocatoryVolunteers: React.FC<{}> = () => {
  var convocatoryVolunteers = volunteers as Volunteer[];
  var dropedVolunteers = volunteers as Volunteer[];
  return (
    <div className="ConvocatoryVolunteers">
      <h1>Voluntarios inscritos a {"Nombre del voluntariado"}</h1>
      <div className="volunteers">
        {
          convocatoryVolunteers.map((volunteer: Volunteer) => {
            return (<div className="volunteer">
              <p>{volunteer.name} {volunteer.surname}</p>
              <div className="buttons">
                <ProfileSVG />
                <div className="checkbox" />
              </div>
            </div>);
          })
        }
      </div>
      <div className="volunteers dropped">
        <h1>Voluntarios desestimados</h1>
        {
          dropedVolunteers.map((volunteer: Volunteer) => {
            return (<div className="volunteer">
              <p>{volunteer.name} {volunteer.surname}</p>
              <div className="buttons">
                <ProfileSVG />
                <div className="checkbox" />
              </div>
            </div>);
          })
        }
      </div>
    </div >
  );
}

ConvocatoryVolunteers.displayName = 'ConvocatoryVolunteers';
