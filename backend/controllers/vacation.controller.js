const db = require('../models');
const Vacation = db.Vacation;

// create and save a vacation
exports.create = (req, res) => {
  // validate
  if (!req.body.name || !req.body.email) {
    res.status(400).send({
      message: `Name or email cannot be empty.`,
      success: false,
      errorCode: `ERR9001`,
    });
    return;
  }

  // create object in memory
  const { name, mobile_number, email, destination, date_of_travel } = req.body;
  const vacation = {
    name,
    mobile_number,
    email,
    destination,
    date_of_travel,
  };
  vacation.name = name || vacation.name;
  vacation.email = email == true || email == false ? email : vacation.email;
  vacation.mobile_number = mobile_number || vacation.mobile_number;
  vacation.date_of_travel = date_of_travel || vacation.date_of_travel;

  // save to db
  Vacation.create(vacation)
    .then(data => {
      res.status(200).send({
        success: true,
        message: 'Vacation saved successfully.',
        data: data,
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Saving of Vacation data failed. Error: ${error}`,
        errorCode: `ERR8001`,
      });
    });
};

// retrieve all vacations
exports.findAll = (req, res) => {
  // find and respond
  Vacation.findAll()
    .then(data => {
      res.status(200).send({
        success: true,
        data: data,
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve vacation records. Error: ${error}`,
        errorCode: `ERR8002`,
      });
    });
};

// retrieve a single vacation
exports.findOne = (req, res) => {
  // find and respond
  const id = req.params.id;

  Vacation.findByPk(id)
    .then(data => {
      if (data) {
        res.status(200).send({
          success: true,
          data: data,
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find vacation data with id = ${id}`,
          errorCode: `ERR7001`,
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot retrieve vacation record. Error: ${error}`,
        errorCode: `ERR8003`,
      });
    });
};

// update a vacation
exports.update = (req, res) => {
  // validate
  if (!req.body.name || !req.body.description) {
    res.status(400).send({
      message: `Name and/or Description cannot be empty during an update.`,
      success: false,
      errorCode: `ERR9002`,
    });
    return;
  }

  // get id
  const id = req.params.id;

  // create object in memory
  const { name, mobile_number, email, destination, date_of_travel } = req.body;
  const vacation = {
    name,
    mobile_number,
    email,
    destination,
    date_of_travel,
  };
  vacation.name = name || vacation.name;
  vacation.email = email == true || email == false ? email : vacation.email;
  vacation.mobile_number = mobile_number || vacation.mobile_number;
  vacation.date_of_travel = date_of_travel || vacation.date_of_travel;

  // save to db
  Vacation.update(vacation, { where: { id: id } })
    .then(num => {
      if (num && num[0] && num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Vacation updated successfully.',
          data: {
            id: id,
            recordsAffected: num && num[0] ? num[0] : 1,
          },
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot find vacation data with id = ${id}, update data ignored.`,
          errorCode: `ERR7002`,
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform update at the moment. Error: ${error}`,
        errorCode: `ERR8004`,
      });
    });
};

// delete all vacations
exports.deleteAll = (req, res) => {
  Vacation.destroy({ where: {}, trucate: true })
    .then(nums => {
      res.status(200).send({
        success: true,
        message: `${nums} vacation${nums > 1 ? 's' : ''} deleted successfully.`,
        data: {
          recordsAffected: nums,
        },
      });
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform date all at the moment. Error: ${error}`,
        errorCode: `ERR8005`,
      });
    });
};

// delete a single vacation
exports.deleteOne = (req, res) => {
  // get id
  const id = req.params.id;

  // save to db and respond
  Vacation.destroy({ where: { id: id } })
    .then(num => {
      if (num >= 1) {
        res.status(200).send({
          success: true,
          message: 'Vacation deleted successfully.',
          data: {
            id: id,
            recordsAffected: num,
          },
        });
      } else {
        res.status(400).send({
          success: false,
          message: `Cannot delete vacation data with id = ${id}, delete request ignored.`,
          errorCode: `ERR7003`,
        });
      }
    })
    .catch(error => {
      res.status(500).send({
        success: false,
        message: `Cannot perform deletion at the moment. Error: ${error}`,
        errorCode: `ERR8006`,
      });
    });
};
