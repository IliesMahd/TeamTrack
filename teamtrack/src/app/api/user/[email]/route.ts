import { NextResponse } from "next/server";
import { connect } from "../../../../utils/db";
import User from "../../../../models/User";
import validator from "validator";

const HTTP_STATUS = {
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
    CREATED: 201,
    NOT_FOUND: 404,
    OK: 200
};

export const GET = async(request: Request, {params}: {params: {email: string}}) => {
    try {
        await connect()

        const { email } = params;

        if (!email || !validator.isEmail(email)) {
            return NextResponse.json("Email invalide", { status: HTTP_STATUS.NOT_FOUND });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json("Utilisateur inexistant", { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
        }

        return NextResponse.json(user, { status: HTTP_STATUS.OK });
    } catch(error) {
        console.error("Erreur lors de la récupération des données de l'utilisateur :", error);
        return NextResponse.json("Internal Server Error", { status: HTTP_STATUS.INTERNAL_SERVER_ERROR });
    }
}