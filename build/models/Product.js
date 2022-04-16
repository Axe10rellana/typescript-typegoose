"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//importaciones
const typegoose_1 = require("@typegoose/typegoose");
const Comment_1 = require("./Comment");
const nanoid_1 = require("nanoid");
const User_1 = require("./User");
class Product {
}
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: () => (0, nanoid_1.nanoid)() }),
    __metadata("design:type", String)
], Product.prototype, "sku", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, lowercase: true }),
    __metadata("design:type", String)
], Product.prototype, "url", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [String] }),
    __metadata("design:type", Array)
], Product.prototype, "tags", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [Comment_1.Comment] }),
    __metadata("design:type", Array)
], Product.prototype, "comments", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => User_1.User }),
    __metadata("design:type", Object)
], Product.prototype, "owner", void 0);
const ProductModel = (0, typegoose_1.getModelForClass)(Product);
exports.default = ProductModel;
