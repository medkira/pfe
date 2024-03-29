import { ObjectId } from 'mongodb'

export const isValidObjectId = (id: string): boolean => ObjectId.isValid(id);

export const objectIdToString = (objectId: ObjectId): string => objectId.toHexString();

export const stringToObjectId = (string: string): ObjectId => new ObjectId(string);

export const mapDocument = (document: any): any => {
    const { _id: objectId, ...rest } = document._doc;

    const id = objectIdToString(objectId);

    return { id, ...rest };
}

export const mapCollection = (collection: any[]): any[] => {
    return collection.map((document) => mapDocument(document));
}