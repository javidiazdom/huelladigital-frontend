import { array } from '@storybook/addon-knobs';
import * as React from 'react';
import './ConvocatoryVolunteers.scss';
import { Volunteer } from '../../../../../domain/models/Volunteer';
import volunteers from './VolunteersMock.json';

export const ConvocatoryVolunteers: React.FC<{}> = () => {
  var convocatoryVolunteers = volunteers as Volunteer[];
  return (
    <div className="ConvocatoryVolunteers">
      <h1>Voluntarios para {"Nombre del voluntariado"}</h1>
      <div className="Volunteers">
        {
          convocatoryVolunteers.map((volunteer: Volunteer) => {
            return (<div className="Volunteer">
              <p>{volunteer.name} {volunteer.surname}</p>
            </div>);
          })
        }
      </div>
    </div>
  );
}

ConvocatoryVolunteers.displayName = 'ConvocatoryVolunteers';
