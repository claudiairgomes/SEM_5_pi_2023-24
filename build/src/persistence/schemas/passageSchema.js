"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passageSchema = new mongoose_1.default.Schema({
    domainId: { type: String, unique: true },
    fromFloorId: {
        type: String,
        required: [true, 'Please enter fromFloorId'],
        index: true,
    },
    toFloorId: {
        type: String,
        required: [true, 'Please enter fromFloorId'],
    },
    description: {
        type: String,
        required: [false, 'Enter description (optional)'],
        index: true,
    },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('passage', passageSchema);
//# sourceMappingURL=passageSchema.js.map