import '../App.css'; 

const TemplatesComponent = () => {
  return <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3D Flipping Card Hover Effect</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img  class="icon" />
          <h3>Research paper</h3>
          <p>
             a piece of academic writing that provides analysis, interpretation, and argument based on in-depth independent research.
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img class="icon" />
          <h3>IEEE</h3>
          <p>
            (IEEE) style is a widely accepted format for writing research papers, commonly used in technical fields, particularly in computer science.
          </p>
          <button class="button-31" role="button">Click here</button>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <h3>Research paper</h3>
          <p>
            a piece of academic writing that provides analysis, interpretation, and argument based on in-depth independent research.
            
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <img class="icon" />
          <h3>Elsevier</h3>
          <p>
            Elsevier is a global information analytics business specializing in scientific, technical, and medical content.
          </p>
           <button class="button-31" role="button">Click here</button>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
          <img  class="icon" />
          <h3>Research paper</h3>
          <p>
            a piece of academic writing that provides analysis, interpretation, and argument based on in-depth independent research.
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <h3>MDPI</h3>
          <p>
           MDPI is an open-access publisher of peer-reviewed journals covering various fields in science, technology, and medicine.
          </p>
           <button class="button-31" role="button">Click here</button>
        </div>
      </div>
    </div>
  </body>
</html>;
};


export default TemplatesComponent;
