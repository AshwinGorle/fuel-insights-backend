const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    assignment_id: {
        type: String,
        unique: true
    },
    class_id: {
        type: Schema.Types.ObjectId,
        ref: 'Class' // Assuming you have a Class model
    },
    title: String,
    description: String,
    due_date: Date,
    total_points: Number,
    attachments: [{
        type: Schema.Types.ObjectId,
        ref: 'Attachment' // Assuming you have an Attachment model
    }],
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const AssignmentModel = mongoose.model('Assignment', assignmentSchema);

export default AssignmentModel;
