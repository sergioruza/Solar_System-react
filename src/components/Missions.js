import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="everyMissions" data-testid="missions">
        <Title className="mizao" headline="Missões" />
        <div className="onlyCards">
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))
          }
        </div>

      </div>
    );
  }
}

export default Missions;
