<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Producto::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validados = $this->validar();
        $producto = Producto::get()->where('nombre',$validados['nombre'])->where('descripcion',$validados['descripcion']);
        if($producto->isEmpty()){
            $producto = new Producto($validados);
            $producto->save();
            return $producto;
        }else{
            return response()->json([
                'message' => 'Page Not Found. If error persists, contact info@website.com'], 404);
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function show(Producto $producto)
    {
        $producto = Producto::find($producto->id);
        if($producto){
            return response()->json($producto,200);
        }else{
            return response()->json([
                'message' => 'Producto no encontrado'], 404);
            }
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function edit(Producto $producto)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Producto $producto)
    {
        $validado = $this->validar();
        Producto::findOrfail($producto->id);
        $producto->nombre = $validado['nombre'];
        $producto->descripcion = $validado['descripcion'];
        $producto->precio = $validado['precio'];
        $producto->save();
        return $producto;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Producto  $producto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Producto $producto)
    {
        Producto::find($producto->id)->delete();
    }

    private function validar()
    {
        $validados = request()->validate([
            'nombre' => 'required|string',
            'descripcion'=> 'required|string',
            'precio'=> 'required'
        ]);
        return $validados;
    }
}
