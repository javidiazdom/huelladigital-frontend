import * as React from 'react';
import './ConvocatoryList.scss';
import { useState, useEffect} from 'react';
import { ConvocatoryCard } from '../../../components/organisms/ConvocatoryCard';
import exampleConvocatoryList from './exampleConvocatoryList.json';
import { ConvocatoryCardProps } from '../../../components/organisms/ConvocatoryCard/types';
import ConvocatoriesFetch from '../../../utils/fetch/convocatories';

export const ConvocatoryList: React.FC<{}> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = 30;
  const pageSize = 5;

  useEffect(() => {
    async function fetchConvocatories() {
      const convocatoriesFetch = new ConvocatoriesFetch();
      const convocatories = await convocatoriesFetch.getAllConvocatories(currentPage, pageSize);
      console.log(convocatories);
    }
    fetchConvocatories();
  });
  const handlePrevClick = () => { 
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log(currentPage)
  }

  const handleNextClick = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="ConvocatoryList" id = "ConvocatoryList">
    <h2 className="Title">Convocatorias</h2>
    {exampleConvocatoryList.map((convocatory: ConvocatoryCardProps) => (
      <ConvocatoryCard
        title={convocatory.title}
        description={convocatory.description}
        photo={convocatory.photo}
        city={convocatory.city}
        localization={convocatory.localization}
        agesRange={convocatory.agesRange}
        startDay={convocatory.startDay}
        finishDay={convocatory.finishDay}
      />
    ))}
    <div className={'pageNav'}>
      {(currentPage > 0) && <button onClick={handlePrevClick}>Anterior</button>}
      <p>1 - 2- 3 - 5 .... 30</p>
      <button onClick={handleNextClick}>Siguiente</button>
    </div>
  </div>
  );
  
};

ConvocatoryList.displayName = 'ConvocatoryList';
