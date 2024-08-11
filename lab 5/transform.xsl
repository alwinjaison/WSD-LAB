<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Travel Booking Information</title>
                <style>
                    table {width: 100%; border-collapse: collapse;}
                    th, td {padding: 8px; text-align: left; border-bottom: 1px solid #ddd;}
                    th {background-color: #f2f2f2;}
                </style>
            </head>
            <body>
                <h2>Travel Booking Details</h2>
                <table>
                    <tr>
                        <th>Traveler Name</th>
                        <th>Contact</th>
                        <th>Airline</th>
                        <th>Flight Date</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price (USD)</th>
                        <th>Booking ID</th>
                    </tr>
                    <xsl:for-each select="travelBooking/booking">
                        <tr>
                            <td><xsl:value-of select="traveler/name"/></td>
                            <td><xsl:value-of select="traveler/contact"/></td>
                            <td><xsl:value-of select="flight/airline"/></td>
                            <td><xsl:value-of select="flight/date"/></td>
                            <td><xsl:value-of select="flight/route/from"/></td>
                            <td><xsl:value-of select="flight/route/to"/></td>
                            <td><xsl:value-of select="price"/></td>
                            <td><xsl:value-of select="bookingID"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
