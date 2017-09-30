package com.arief.rs;


import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api")
public class RestService {

    //URI path biasa
    @Path("/r1")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Response response1(){
        return
                Response.
                        status(200)

                        .entity(
                            "This is Response 1"
                        ).

                        build();
    }



    //URI path dengan PathParam
    @Path("/r1/{nama}")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Response response2(@PathParam("nama")String nama){
        return Response.
                status(200).
                entity(
                        "Hello nama anda  : " + nama
                ).
                build();
    }


}
