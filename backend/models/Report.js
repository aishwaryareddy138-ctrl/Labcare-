
const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
      unique: true
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },

    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test",
      required: true
    },

    results: [
      {
        parameter: {
          type: String,
          required: true
        },
        value: {
          type: String,
          required: true
        },
        unit: String,
        normalRange: String
      }
    ],

    technician: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LabTechnician"
    },

    doctorReview: {
      remarks: {
        type: String,
        default: ""
      },
      reviewedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        default: null
      },
      reviewedAt: {
        type: Date,
        default: null
      }
    },

    status: {
      type: String,
      enum: ["Pending Review", "Reviewed"],
      default: "Pending Review"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Report", reportSchema);
