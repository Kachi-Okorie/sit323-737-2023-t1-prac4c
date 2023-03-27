// exports.get_post = function (req, res) {
//   res.send("Secret Post")
// };
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });

const add= (num1,num2) => {
  return num1+num2;
}

exports.get_add = function (req, res) {
  try{
    const num1= parseFloat(req.query.num1);
    const num2=parseFloat(req.query.num2);
    if(isNaN(num1)) {
        logger.error("num1 is incorrectly defined");
        throw new Error("num1 incorrectly defined");
    }
    if(isNaN(num2)) {
       logger.error("num2 is incorrectly defined");
        throw new Error("num2 incorrectly defined");
    }
    
    if (num1 === NaN || num2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    logger.info('Parameters '+num1+' and '+num2+' received for addition');
    const result = add(num1,num2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
};

const subtract= (num1,num2) => {
  return num1-num2;
}

exports.get_subtract = function (req, res) {
  try{
    const num1= parseFloat(req.query.num1);
    const num2=parseFloat(req.query.num2);
    if(isNaN(num1)) {
        logger.error("num1 is incorrectly defined");
        throw new Error("num1 incorrectly defined");
    }
    if(isNaN(num2)) {
        logger.error("num2 is incorrectly defined");
        throw new Error("num2 incorrectly defined");
    }
    
    if (num1 === NaN || num2 === NaN) {
        console.log()
        throw new Error("Parsing Error");
    }
    logger.info('Parameters '+num1+' and '+num2+' received for subtraction');
    const result = subtract(num1,num2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
  };

  const multiply= (num1,num2) => {
    return num1*num2;
  }
  exports.get_multiply = function (req, res) {
    try{
      const num1= parseFloat(req.query.num1);
      const num2=parseFloat(req.query.num2);
      if(isNaN(num1)) {
          logger.error("num1 is incorrectly defined");
          throw new Error("num1 incorrectly defined");
      }
      if(isNaN(num2)) {
          logger.error("num2 is incorrectly defined");
          throw new Error("num2 incorrectly defined");
      }
      
      if (num1 === NaN || num2 === NaN) {
          console.log()
          throw new Error("Parsing Error");
      }
      logger.info('Parameters '+num1+' and '+num2+' received for multiplication');
      const result = multiply(num1,num2);
      res.status(200).json({statuscocde:200, data: result }); 
      } catch(error) { 
          console.error(error)
          res.status(500).json({statuscocde:500, msg: error.toString() })
        }
  };

  const division= (num1,num2) => {
    return num1/num2;
  }

  exports.get_divide = function (req, res) {
    try{
      const num1= parseFloat(req.query.num1);
      const num2=parseFloat(req.query.num2);
      if(isNaN(num1)) {
          logger.error("num1 is incorrectly defined");
          throw new Error("num1 incorrectly defined");
      }
      if(isNaN(num2)) {
          logger.error("num2 is incorrectly defined");
          throw new Error("num2 incorrectly defined");
      }
      
      if (num1 === NaN || num2 === NaN) {
          console.log()
          throw new Error("Parsing Error");
      }
      logger.info('Parameters '+num1+' and '+num2+' received for division');
      const result = division(num1,num2);
      res.status(200).json({statuscocde:200, data: result }); 
      } catch(error) { 
          console.error(error)
          res.status(500).json({statuscocde:500, msg: error.toString() })
        }
};
