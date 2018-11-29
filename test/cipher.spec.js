describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "HIJKLM NOPQRSTUVWXYZABCDEFG" para "ABCDEF GHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEF GHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLM NOPQRSTUVWXYZABCDEFG");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "ABC DEFGHIJKLMNOPQRSTUVWXYZ" para "HIJ KLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode("HIJ KLMNOPQRSTUVWXYZABCDEFG", 33), "ABC DEFGHIJKLMNOPQRSTUVWXYZ");
    });

  });

  /*   describe('cipher.createCipherWithOffset', () => {
  
      it('debería ser una función', () => {
        assert.equal(typeof cipher.createCipherWithOffset, 'function');
      });
  
      it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');
  
    }); */

});
