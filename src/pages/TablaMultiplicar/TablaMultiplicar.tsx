import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const TablaMultiplicar: React.FC = () => {
  const [numero, setNumero] = useState('');
  const [tabla, setTabla] = useState<number[]>([]);

  const generarTabla = () => {
    const valor = Number(numero);

    if (!Number.isInteger(valor)) {
      setTabla([]);
      return;
    }

    const resultados = [];

    for (let i = 1; i <= 13; i++) {
      resultados.push(valor * i);
    }

    setTabla(resultados);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabla de Multiplicar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ padding: '30px', textAlign: 'center' }}>

          <h1>Tabla de Multiplicar</h1>

          <IonInput
            label="Número"
            labelPlacement="stacked"
            type="number"
            placeholder="Ejemplo: 5"
            value={numero}
            onIonInput={(e) =>
              setNumero(e.detail.value ?? '')
            }
          />

          <br />

          <IonButton onClick={generarTabla}>
            GENERAR TABLA
          </IonButton>

          <div style={{ marginTop: '20px' }}>
            {tabla.map((resultado, index) => (
              <p key={index}>
                {numero} × {index + 1} = {resultado}
              </p>
            ))}
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default TablaMultiplicar;