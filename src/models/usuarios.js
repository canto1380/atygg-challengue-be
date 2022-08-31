import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
        minlength: 4,
        maxlength: 60,
      },
      apellido: {
        type: String,
        trim: true,
        required: true,
        minlength: 3,
        maxlength: 60,
      },
      edad: {
        type: Number,
        trim: true,
        required: true,
        minlength: 1,
        maxlength: 3,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength:15,
        maxlength: 40,
      },
      clave: {
        type: String,
        trim: true,
        required: true,
        minlength: 8,
        maxlength: 15,
      }
}, {timestamps: true} )

usuarioSchema.pre('save', function (next) {
    bcrypt
      .genSalt(10)
      .then((salts) => {
        bcrypt
          .hash(this.clave, salts)
          .then((hash) => {
            this.clave = hash;
            next();
          })
          .catch((error) => next(error));
      })
      .catch((error) => next(error));
  });

usuarioSchema.methods.comparePassword = function (clave1, cb) {
    bcrypt.compare(clave1, this.clave, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    });
  };
  
const Usuario = mongoose.model('Usuario', usuarioSchema)
export default Usuario;